import { NgModule } from '@angular/core';

//Declarations
import { DailyPracticeComponent } from './pages/daily-practice/daily-practice.component';
import { PracticeIndexComponent } from './pages/practice-index/practice-index.component';

//Imports
import { RoutingModule } from './routing-module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [DailyPracticeComponent, PracticeIndexComponent],
  imports: [RoutingModule, SharedModule]
})
export class HoudiniPracticeModule { }
