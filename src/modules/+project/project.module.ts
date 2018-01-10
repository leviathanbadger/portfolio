import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectComponent } from './pages/project/project';

//Imports
import { routerConfig } from './router-config';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    declarations: [ProjectComponent],
    imports: [RouterModule.forChild(routerConfig), SharedModule.forRoot()],
    exports: [ProjectComponent]
})
export class ProjectModule {
}
