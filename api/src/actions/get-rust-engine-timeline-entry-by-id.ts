import { APIGatewayEventRequestContext } from 'aws-lambda';
import { DynamoDBClient, ScanCommand, QueryCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { ProxyIntegrationEvent, ProxyIntegrationResult } from 'aws-lambda-router/lib/proxyIntegration';
import { RustEngineTimelineEntry } from '../models/rust-engine-timeline-entry.js';
import { convertToRustEngineTimelineEntryDto } from '../models/rust-engine-timeline-entry-dto.js';

async function getLatestRustEngineTimelineEntry(req: ProxyIntegrationEvent<unknown>, context: APIGatewayEventRequestContext): Promise<ProxyIntegrationResult> {
  const ddb = new DynamoDBClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1'
  });

  const command = new ScanCommand({
    TableName: 'PortfolioRustEngineTimelineEntries',
  });

  try {
    const results = await ddb.send(command);
    console.info(`Scanned table. There were ${results.Items!.length} items returned of ${results.Count}`);
    const items = results.Items!.map(item => convertToRustEngineTimelineEntryDto(<RustEngineTimelineEntry>unmarshall(item)));
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

export async function getRustEngineTimelineEntryById(req: ProxyIntegrationEvent<unknown>, context: APIGatewayEventRequestContext): Promise<ProxyIntegrationResult> {
  let entryId = (req.paths || {}).entryId || 'latest';
  if (entryId === 'latest') {
    return await getLatestRustEngineTimelineEntry(req, context);
  }

  try {
    let entryIdNum = parseInt(entryId, 10);
    if (`${entryIdNum}` !== entryId) throw new Error(`entryId parameter is not a well-formed and normalized integer parameter. Value: ${entryId}`);
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
    TableName: 'PortfolioRustEngineTimelineEntries',
    KeyConditionExpression: '#id = :id',
    ExpressionAttributeNames: {
      '#id': 'Id'
    },
    ExpressionAttributeValues: {
      ':id': { 'N': entryId }
    }
  });

  try {
    const results = await ddb.send(command);
    console.info(`Queried table. There were ${results.Items!.length} items returned of ${results.Count}`);
    const items = results.Items!.map(item => convertToRustEngineTimelineEntryDto(<RustEngineTimelineEntry>unmarshall(item)));
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
