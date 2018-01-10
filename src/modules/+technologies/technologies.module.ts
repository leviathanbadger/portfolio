import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TechnologiesComponent } from './pages/technologies/technologies';

//Imports
import { routerConfig } from './router-config';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    declarations: [TechnologiesComponent],
    imports: [RouterModule.forChild(routerConfig), SharedModule.forRoot()],
    exports: [TechnologiesComponent]
})
export class TechnologiesModule {
}
