import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Declarations
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageNavComponent } from './components/page-nav/page-nav.component';

//Imports
import { AppRoutingModule } from './app-routing.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    NotFoundComponent,
    PageFooterComponent,
    PageHeaderComponent,
    PageNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule, //Disabling this until I need it; then I can add more specific modules
    FontAwesomeModule,
    SharedModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
