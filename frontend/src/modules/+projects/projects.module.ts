import { NgModule } from '@angular/core';

//Declarations
import { ProjectComponent } from './pages/project/project.component';
import { ProjectIndexComponent } from './pages/project-index/project-index.component';

//Imports
import { RoutingModule } from './routing-module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [ProjectComponent, ProjectIndexComponent],
  imports: [RoutingModule, SharedModule],
  exports: []
})
export class ProjectsModule { }
