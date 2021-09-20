import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';
import { allProjects } from './data/all-projects';
import { PortfolioProject } from 'models/portfolio-project';

async function main() {
  console.log('Converting projects...');
  const convertedProjects = allProjects.map(proj => proj.toPortfolioProject());

  console.log('Creating DynamoDBClient...');
  const ddb = new DynamoDBClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1'
  });

  for (let q = 0; q < convertedProjects.length; q++) {
    let proj = convertedProjects[q];
    console.log(`Updating project ${q + 1} of ${convertedProjects.length}: (${proj.Name})...`);
    await upsertProject(ddb, proj);
  }

  console.log(`Converted ${allProjects.length} projects!`);
}

async function upsertProject(ddb: DynamoDBClient, proj: PortfolioProject) {
  const command = new PutItemCommand({
    TableName: 'PortfolioProjects',
    Item: marshall(proj, { removeUndefinedValues: true })
  });

  try {
    await ddb.send(command);
  }
  catch (err) {
    console.error(err);
  }
}

main();
