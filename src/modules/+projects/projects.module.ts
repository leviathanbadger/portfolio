import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Declarations
import { ProjectsComponent } from './pages/projects/projects';

import { AlternatingImageComponent } from './components/alternating-img/alternating-img';

//Imports
import { routerConfig } from './router-config';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    declarations: [ProjectsComponent, AlternatingImageComponent],
    imports: [RouterModule.forChild(routerConfig), SharedModule.forRoot()],
    exports: []
})
export class ProjectsModule {
}
