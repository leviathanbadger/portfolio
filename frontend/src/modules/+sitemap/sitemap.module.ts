import { NgModule } from '@angular/core';

//Declarations
import { SitemapComponent } from './pages/sitemap/sitemap.component';

//Imports
import { RoutingModule } from './routing-module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [SitemapComponent],
  imports: [RoutingModule, SharedModule]
})
export class SitemapModule { }
