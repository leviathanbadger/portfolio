import { APIGatewayEventRequestContext } from 'aws-lambda';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { ProxyIntegrationEvent, ProxyIntegrationResult } from 'aws-lambda-router/lib/proxyIntegration';
import { HoudiniDailyPractice } from '../models/houdini-daily-practice.js';
import { convertToHoudiniDailyPracticeDto } from '../models/houdini-daily-practice-dto.js';

export async function getAllHoudiniDailyPractices(req: ProxyIntegrationEvent<unknown>, context: APIGatewayEventRequestContext): Promise<ProxyIntegrationResult> {
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
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(items)
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
