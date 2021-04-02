import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';

export const routes: Routes = [
  {path: '', component: ProjectComponent, data: {routeType: 'tile'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
