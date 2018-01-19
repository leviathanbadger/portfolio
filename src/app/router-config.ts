import { Routes } from '@angular/router';

import { LayoutComponent } from './pages/layout/layout';
import { HomeComponent } from './pages/home/home';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routerConfig: Routes = [
    {path: '', component: LayoutComponent, children: [
        {path: '', component: HomeComponent, pathMatch: 'full'},
        {path: 'resume', loadChildren: '../modules/+resume/resume.module#ResumeModule'},
        {path: 'project', pathMatch: 'full', redirectTo: 'projects'},
        {path: 'projects', loadChildren: '../modules/+projects/projects.module#ProjectsModule'},
        {path: 'project/:projectSlug', loadChildren: '../modules/+project/project.module#ProjectModule'},
        {path: '**', component: NotFoundComponent}
    ]}
];
