import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectIndexComponent } from './pages/project-index/project-index.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index', data: {routeType: 'tile-list'}},
  {path: 'index', component: ProjectIndexComponent, data: {routeType: 'tile-list'}},
  {path: ':projectSlug', component: ProjectComponent, data: {routeType: 'tile'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
