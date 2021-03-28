import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  {path: '', component: ProjectsComponent, data: {routeType: 'tile-list'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
