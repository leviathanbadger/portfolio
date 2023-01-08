import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';
import { readFile } from 'fs/promises';
import { parse } from 'yaml';
import { getAllFiles } from 'get-all-files';
import { ProjectManifest } from './models/project-manifest.js';
import { Project } from './models/project.js';
import { PortfolioProject } from './models/portfolio-project.js';
import { HoudiniDailyPracticeManifest } from './models/houdini-daily-practice-manifest.js';
import { HoudiniDailyPractice } from './models/houdini-daily-practice.js';
import { PortfolioHoudiniDailyPractice } from './models/portfolio-houdini-daily-practice.js';
import { RustEngineTimelineEntryManifest } from './models/rust-engine-timeline-entry-manifest.js';
import { RustEngineTimelineEntry } from './models/rust-engine-timeline-entry.js';
import { PortfolioRustEngineTimelineEntry } from './models/portfolio-rust-engine-timeline-entry.js';

async function loadAllProjects(): Promise<Project[]> {
  let allFilePaths = await getAllFiles('projects', { resolve: false }).toArray();
  let allManifestPaths = allFilePaths.filter(file => file.endsWith('.yaml') || file.endsWith('.yml'));
  let bodyPromises: Promise<ProjectManifest>[] = [];
  for (let manifestPath of allManifestPaths) {
    let bodyPromise = readFile(manifestPath).then(body => parse(body.toString()) as ProjectManifest);
    bodyPromises.push(bodyPromise);
  }
  let allBodies = await Promise.all(bodyPromises);
  return await Promise.all(allBodies.map(body => Project.fromManifest(body)));
}

async function loadAllHoudiniDailyPractice(): Promise<HoudiniDailyPractice[]> {
  let allFilePaths = await getAllFiles('houdini-daily-practice', { resolve: false }).toArray();
  let allManifestPaths = allFilePaths.filter(file => file.endsWith('.yaml') || file.endsWith('.yml'));
  let bodyPromises: Promise<HoudiniDailyPracticeManifest>[] = [];
  for (let manifestPath of allManifestPaths) {
    let bodyPromise = readFile(manifestPath).then(body => parse(body.toString()) as HoudiniDailyPracticeManifest);
    bodyPromises.push(bodyPromise);
  }
  let allBodies = await Promise.all(bodyPromises);
  return await Promise.all(allBodies.map(body => HoudiniDailyPractice.fromManifest(body)));
}

async function loadAllRustEngineTimelineEntries(): Promise<RustEngineTimelineEntry[]> {
  let allFilePaths = await getAllFiles('rust-engine-timeline', { resolve: false }).toArray();
  let allManifestPaths = allFilePaths.filter(file => file.endsWith('.yaml') || file.endsWith('.yml'));
  let bodyPromises: Promise<RustEngineTimelineEntryManifest>[] = [];
  for (let manifestPath of allManifestPaths) {
    let bodyPromise = readFile(manifestPath).then(body => parse(body.toString()) as RustEngineTimelineEntryManifest);
    bodyPromises.push(bodyPromise);
  }
  let allBodies = await Promise.all(bodyPromises);
  return await Promise.all(allBodies.map(body => RustEngineTimelineEntry.fromManifest(body)));
}

async function main() {
  console.log('Converting projects...');
  const allProjects = await loadAllProjects();
  const convertedProjects = allProjects.map(proj => proj.toPortfolioProject());

  console.log('Converting Houdini daily practices...');
  const allHoudiniPractices = await loadAllHoudiniDailyPractice();
  const convertedHoudiniPractices = allHoudiniPractices.map(proj => proj.toPortfolioHoudiniDailyPractice());

  console.log('Converting Rust Engine timeline entries...');
  const allRustEngineTimelineEntries = await loadAllRustEngineTimelineEntries();
  const convertedRustEngineTimelineEntries = allRustEngineTimelineEntries.map(entry => entry.toPortfolioRustEngineTimelineEntry());

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

  for (let q = 0; q < convertedHoudiniPractices.length; q++) {
    let practice = convertedHoudiniPractices[q];
    console.log(`Updating Houdini daily practice ${q + 1} of ${convertedHoudiniPractices.length}: (${practice.Name})...`);
    await upsertHoudiniDailyPractice(ddb, practice);
  }

  for (let q = 0; q < convertedRustEngineTimelineEntries.length; q++) {
    let entry = convertedRustEngineTimelineEntries[q];
    console.log(`Updating Rust Engine timeline entry ${q + 1} of ${convertedRustEngineTimelineEntries.length}: (${entry.Name})...`);
    await upsertRustEngineTimelineEntry(ddb, entry);
  }

  console.log(`Converted ${allProjects.length} projects, ${allHoudiniPractices.length} Houdini daily practices, and ${convertedRustEngineTimelineEntries.length} Rust Engine timeline entries!`);
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

async function upsertHoudiniDailyPractice(ddb: DynamoDBClient, practice: PortfolioHoudiniDailyPractice) {
  const command = new PutItemCommand({
    TableName: 'PortfolioHoudiniDailyPractices',
    Item: marshall(practice, { removeUndefinedValues: true, convertEmptyValues: true })
  });

  try {
    await ddb.send(command);
  }
  catch (err) {
    console.error(err);
  }
}

async function upsertRustEngineTimelineEntry(ddb: DynamoDBClient, entry: PortfolioRustEngineTimelineEntry) {
  const command = new PutItemCommand({
    TableName: 'PortfolioRustEngineTimelineEntries',
    Item: marshall(entry, { removeUndefinedValues: true, convertEmptyValues: true })
  });

  try {
    await ddb.send(command);
  }
  catch (err) {
    console.error(err);
  }
}

main();
