import { Routes } from '@angular/router';

import { ProjectComponent } from './pages/project/project';

export const routerConfig: Routes = [
    {path: '', component: ProjectComponent, data: {routeType: 'tile'}}
];
