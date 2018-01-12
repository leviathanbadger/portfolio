import { NgModule, ModuleWithProviders } from '@angular/core';

//Declarations
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner';

import { NgLet } from './directives/ng-let.directive';

//Imports
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

export const module_exports = [LoadingSpinnerComponent,
                               
                               NgLet];

const imported_modules = [CommonModule, HttpModule];
export const exported_modules = [CommonModule, HttpModule];

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
