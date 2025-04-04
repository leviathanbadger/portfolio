import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

export const routes: Routes = [
    { component: DefaultLayoutComponent, path: '', children: [
        { loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), path: '', pathMatch: 'full' },
        { loadComponent: () => import('./pages/cv/cv.component').then(m => m.CurriculumVitaeComponent), path: 'cv' },
        { redirectTo: 'cv', path: 'resume' },
        { loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent), path: 'projects' },
        { loadComponent: () => import('./pages/houdini-practice/houdini-practice.component').then(m => m.HoudiniPracticeComponent), path: 'houdini-practice' },
        { loadComponent: () => import('./pages/sitemap/sitemap.component').then(m => m.SitemapComponent), path: 'sitemap' },
        { loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent), path: '**' }
    ] }
];
