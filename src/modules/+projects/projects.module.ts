import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './pages/projects/projects';

//Imports
import { routerConfig } from './router-config';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    declarations: [ProjectsComponent],
    imports: [RouterModule.forChild(routerConfig), SharedModule.forRoot()],
    exports: [ProjectsComponent]
})
export class ProjectsModule {
}
