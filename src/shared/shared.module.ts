import { NgModule, ModuleWithProviders } from '@angular/core';

//Declarations
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner';
import { PageFooterComponent } from './components/page-footer/page-footer';

import { NgLetDirective } from './directives/ng-let.directive';
import { AutofocusDirective } from './directives/autofocus.directive';

//Imports
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

export const module_exports = [LoadingSpinnerComponent,
                               PageFooterComponent,
                               
                               AutofocusDirective,
                               NgLetDirective];

const imported_modules = [CommonModule, HttpModule, FormsModule];
export const exported_modules = [CommonModule, HttpModule, FormsModule];

@NgModule({
    declarations: [...module_exports],
    imports: [...imported_modules],
    exports: [...module_exports, ...exported_modules]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: SharedModule };
    }
}
