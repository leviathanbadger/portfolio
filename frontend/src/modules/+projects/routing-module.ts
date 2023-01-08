import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectIndexComponent } from './pages/project-index/project-index.component';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';
import { VulkanRustComponent } from './pages/vulkan-rust/vulkan-rust.component';
import { VulkanRustTimelineComponent } from './pages/vulkan-rust-timeline/vulkan-rust-timeline.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index', data: {routeType: 'tile-list'}},
  {path: 'index', component: ProjectIndexComponent, data: {routeType: 'tile-list'}},
  {path: 'current', pathMatch: 'full', redirectTo: 'project-game-engine', data: {routeType: 'tile'}},
  {path: 'vulkan-rust-game-engine', component: VulkanRustComponent, data: {routeType: 'tile'}, children: [
    {path: '', pathMatch: 'full', redirectTo: 'overview'},
    {path: 'overview', component: ProjectOverviewComponent},
    {path: 'timeline', component: VulkanRustTimelineComponent}
  ]},
  {path: ':projectSlug', component: ProjectComponent, data: {routeType: 'tile'}, children: [
    {path: '', pathMatch: 'full', redirectTo: 'overview'},
    {path: 'overview', component: ProjectOverviewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
