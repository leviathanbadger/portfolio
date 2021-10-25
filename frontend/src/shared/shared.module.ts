import { NgModule, ModuleWithProviders } from '@angular/core';

//Declarations
import { AlternatingImageComponent } from './components/alternating-img/alternating-img.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner';
import { MarkdownRenderComponent } from './components/markdown-render/markdown-render.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { NgLetDirective } from './directives/ng-let.directive';
import { BypassSecurityPipe } from './pipes/bypass-security.pipe';

//Imports
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ProjectService } from './services/project.service';
import { HoudiniPracticeService } from './services/houdini-practice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AlternatingImageComponent,
    LoadingSpinnerComponent,
    MarkdownRenderComponent,
    SlideshowComponent,
    AutofocusDirective,
    NgLetDirective,
    BypassSecurityPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AlternatingImageComponent,
    LoadingSpinnerComponent,
    MarkdownRenderComponent,
    SlideshowComponent,
    AutofocusDirective,
    NgLetDirective,
    BypassSecurityPipe,

    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [ProjectService, HoudiniPracticeService]
    };
  }
}
