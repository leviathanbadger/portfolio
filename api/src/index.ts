import * as router from 'aws-lambda-router';
import { getAllProjects } from './actions/get-all-projects.js';
import { getAllHoudiniDailyPractices } from './actions/get-all-houdini-daily-practices.js';
import { getHoudiniDailyPracticeById } from './actions/get-houdini-daily-practice-by-id.js';

export const lambdaHandler: any = router.handler({
  proxyIntegration: {
    routes: [{
      path: '/api/projects',
      method: 'GET',
      action: getAllProjects
    }, {
      path: '/api/houdini/daily-practice',
      method: 'GET',
      action: getAllHoudiniDailyPractices
    }, {
      path: '/api/houdini/daily-practice/{dailyPracticeId}',
      method: 'GET',
      action: getHoudiniDailyPracticeById
    }]
  }
});
