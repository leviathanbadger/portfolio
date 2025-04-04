import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

export const routes: Routes = [
    { path: '', component: DefaultLayoutComponent, children: [
        { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
        { path: 'cv', loadComponent: () => import('./pages/cv/cv.component').then(m => m.CurriculumVitaeComponent) },
        { path: 'resume', redirectTo: '/cv' },
        { path: 'projects', loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent) },
        { path: 'art', children: [
            { path: '', pathMatch: 'full', loadComponent: () => import('./pages/art/art.component').then(m => m.ArtComponent) },
            { path: 'houdini', pathMatch: 'full', loadComponent: () => import('./pages/art/houdini/houdini.component').then(m => m.HoudiniComponent) },
            { path: 'houdini/:practiceId', loadComponent: () => import('./pages/art/houdini/houdini.component').then(m => m.HoudiniComponent) },
        ] },
        { path: 'houdini-practice', pathMatch: 'full', redirectTo: '/art/houdini' },
        { path: 'houdini-practice/:practiceId', redirectTo: ({ params }) => `/art/houdini/${encodeURIComponent(params['practiceId'])}` },
        { path: 'sitemap', loadComponent: () => import('./pages/sitemap/sitemap.component').then(m => m.SitemapComponent) },
        { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
    ] },
];
