import { NgModule } from '@angular/core';

//Declarations
import { ProjectComponent } from './pages/project/project.component';
import { ProjectIndexComponent } from './pages/project-index/project-index.component';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';
import { VulkanRustComponent } from './pages/vulkan-rust/vulkan-rust.component';
import { VulkanRustTimelineComponent } from './pages/vulkan-rust-timeline/vulkan-rust-timeline.component';

//Imports
import { RoutingModule } from './routing-module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectIndexComponent,
    ProjectOverviewComponent,
    VulkanRustComponent,
    VulkanRustTimelineComponent
  ],
  imports: [RoutingModule, SharedModule],
  exports: []
})
export class ProjectsModule { }
