import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ResumeComponent } from './pages/resume/resume';

//Imports
import { routerConfig } from './router-config';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    declarations: [ResumeComponent],
    imports: [RouterModule.forChild(routerConfig), SharedModule.forRoot()],
    exports: [ResumeComponent]
})
export class ResumeModule {
}
