import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './pages/projects/projects';

import { AlternatingImage } from './components/alternating-img/alternating-img';

//Imports
import { routerConfig } from './router-config';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    declarations: [ProjectsComponent, AlternatingImage],
    imports: [RouterModule.forChild(routerConfig), SharedModule.forRoot()],
    exports: []
})
export class ProjectsModule {
}
