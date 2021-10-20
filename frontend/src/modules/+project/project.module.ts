import { NgModule } from '@angular/core';

//Declarations
import { ProjectComponent } from './pages/project/project.component';

//Imports
import { RoutingModule } from './routing-module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [RoutingModule, SharedModule]
})
export class ProjectModule { }
