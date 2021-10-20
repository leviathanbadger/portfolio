import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyPracticeComponent } from './pages/daily-practice/daily-practice.component';
import { PracticeIndexComponent } from './pages/practice-index/practice-index.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index', data: {routeType: 'tile-list'}},
  {path: 'index', component: PracticeIndexComponent, data: {routeType: 'tile-list'}},
  {path: ':practiceId', component: DailyPracticeComponent, data: {routeType: 'tile'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
