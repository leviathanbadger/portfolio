import { NgModule, ModuleWithProviders } from '@angular/core';

//Declarations
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner';
import { AutofocusDirective } from './directives/autofocus.directive';
import { NgLetDirective } from './directives/ng-let.directive';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { BypassSecurityPipe } from './pipes/bypass-security.pipe';

//Imports
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AutofocusDirective,
    NgLetDirective,
    MarkdownPipe,
    BypassSecurityPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LoadingSpinnerComponent,
    AutofocusDirective,
    NgLetDirective,
    MarkdownPipe,
    BypassSecurityPipe,

    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [ProjectService]
    };
  }
}
