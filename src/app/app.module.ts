import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//Declarations
import { AppComponent } from './pages/app/app';
import { LayoutComponent } from './pages/layout/layout';
import { HomeComponent } from './pages/home/home';

import { NotFoundComponent } from './pages/not-found/not-found';

import { PageHeaderComponent } from './components/page-header/page-header';
import { PageFooterComponent } from './components/page-footer/page-footer';
import { PageNavComponent } from './components/page-nav/page-nav';

//Imports
import { routerConfig } from './router-config';
import { ServicesModule } from 'services/services.module';
import { SharedModule } from 'shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const module_exports = [AppComponent, LayoutComponent, HomeComponent,
                        NotFoundComponent,
                        
                        PageHeaderComponent, PageFooterComponent, PageNavComponent];

@NgModule({
    declarations: [...module_exports],
    imports: [RouterModule.forRoot(routerConfig), ServicesModule, SharedModule.forRoot(), BrowserAnimationsModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
