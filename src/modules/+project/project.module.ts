import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Declarations
import { ProjectComponent } from './pages/project/project';

import { SlideshowComponent } from './components/slideshow/slideshow';

//Imports
import { routerConfig } from './router-config';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    declarations: [ProjectComponent, SlideshowComponent],
    imports: [RouterModule.forChild(routerConfig), SharedModule.forRoot()]
})
export class ProjectModule {
}
