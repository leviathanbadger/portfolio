import { NgModule } from '@angular/core';

//Declarations
import { ResumeComponent } from './pages/resume/resume.component';

//Imports
import { RoutingModule } from './routing-module';
import { SharedModule } from 'src/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ResumeComponent],
  imports: [RoutingModule, SharedModule, FontAwesomeModule],
  exports: [ResumeComponent]
})
export class ResumeModule { }
