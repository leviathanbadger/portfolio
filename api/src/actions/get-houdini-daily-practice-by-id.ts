import { APIGatewayEventRequestContext } from 'aws-lambda';
import { DynamoDBClient, ScanCommand, QueryCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { ProxyIntegrationEvent, ProxyIntegrationResult } from 'aws-lambda-router/lib/proxyIntegration';
import { HoudiniDailyPractice } from '../models/houdini-daily-practice.js';
import { convertToHoudiniDailyPracticeDto } from '../models/houdini-daily-practice-dto.js';

async function getLatestHoudiniDailyPractice(req: ProxyIntegrationEvent<unknown>, context: APIGatewayEventRequestContext): Promise<ProxyIntegrationResult> {
  const ddb = new DynamoDBClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1'
  });

  const command = new ScanCommand({
    TableName: 'PortfolioHoudiniDailyPractices',
  });

  try {
    const results = await ddb.send(command);
    console.info(`Scanned table. There were ${results.Items!.length} items returned of ${results.Count}`);
    const items = results.Items!.map(item => convertToHoudiniDailyPracticeDto(<HoudiniDailyPractice>unmarshall(item)));
    items.sort((a, b) => b.id - a.id); // Descending order by ID
    const item = items[0] || null;
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(item)
    };
  }
  catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
}

export async function getHoudiniDailyPracticeById(req: ProxyIntegrationEvent<unknown>, context: APIGatewayEventRequestContext): Promise<ProxyIntegrationResult> {
  let practiceId = (req.paths || {}).dailyPracticeId || 'latest';
  if (practiceId === 'latest') {
    return await getLatestHoudiniDailyPractice(req, context);
  }

  try {
    let practiceIdNum = parseInt(practiceId, 10);
    if (`${practiceIdNum}` !== practiceId) throw new Error(`dailyPracticeId parameter is not a well-formed and normalized integer parameter. Value: ${practiceId}`);
  }
  catch (err) {
    console.error(err);
    return {
      statusCode: 422,
      body: JSON.stringify(err)
    };
  }

  const ddb = new DynamoDBClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1'
  });

  const command = new QueryCommand({
    TableName: 'PortfolioHoudiniDailyPractices',
    KeyConditionExpression: '#id = :id',
    ExpressionAttributeNames: {
      '#id': 'Id'
    },
    ExpressionAttributeValues: {
      ':id': { 'N': practiceId }
    }
  });

  try {
    const results = await ddb.send(command);
    console.info(`Queried table. There were ${results.Items!.length} items returned of ${results.Count}`);
    const items = results.Items!.map(item => convertToHoudiniDailyPracticeDto(<HoudiniDailyPractice>unmarshall(item)));
    const item = items[0] || null;
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(item)
    };
  }
  catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
}
