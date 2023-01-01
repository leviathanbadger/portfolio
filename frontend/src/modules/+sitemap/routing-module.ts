import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitemapComponent } from './pages/sitemap/sitemap.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: SitemapComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
