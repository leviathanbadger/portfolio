import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './projects.html',
    styleUrls: ['./projects.scss']
})
export class ProjectsComponent extends ComponentBase {
    constructor() {
        super();
    }
}
