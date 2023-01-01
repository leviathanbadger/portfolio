import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'resume', loadChildren: () => import('../modules/+resume/resume.module').then(m => m.ResumeModule)},
    {path: 'projects', loadChildren: () => import('../modules/+projects/projects.module').then(m => m.ProjectsModule)},
    {path: 'houdini-practice', loadChildren: () => import('../modules/+houdini-practice/houdini-practice.module').then(m => m.HoudiniPracticeModule)},
    {path: 'sitemap', loadChildren: () => import('../modules/+sitemap/sitemap.module').then(m => m.SitemapModule)},
    {path: '**', component: NotFoundComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
