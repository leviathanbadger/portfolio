import { NgModule, ModuleWithProviders } from '@angular/core';

//Declarations
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner';
import { PageFooterComponent } from './components/page-footer/page-footer';

import { NgLetDirective } from './directives/ng-let.directive';
import { AutofocusDirective } from './directives/autofocus.directive';

import { MarkdownPipe } from './pipes/markdown.pipe';
import { SafePipe } from './pipes/safe.pipe';

//Imports
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        PageFooterComponent,
        
        AutofocusDirective,
        NgLetDirective,
        
        MarkdownPipe,
        SafePipe
    ],
    imports: [
        CommonModule, HttpModule, FormsModule
    ],
    exports: [
        LoadingSpinnerComponent,
        PageFooterComponent,
        
        AutofocusDirective,
        NgLetDirective,
        
        MarkdownPipe,
        SafePipe,
        
        CommonModule, HttpModule, FormsModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: SharedModule };
    }
}
