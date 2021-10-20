import { NgModule } from '@angular/core';

//Declarations
import { ProjectsComponent } from './pages/projects/projects.component';

//Imports
import { RoutingModule } from './routing-module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [RoutingModule, SharedModule],
  exports: []
})
export class ProjectsModule { }
