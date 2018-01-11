import { NgModule, Provider } from '@angular/core';

import { ProjectService } from './project.service';

const module_providers: Provider[] = [
    ProjectService
];

@NgModule({
    providers: [...module_providers]
})
export class ServicesModule {
}
