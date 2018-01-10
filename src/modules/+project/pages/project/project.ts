import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './project.html',
    styleUrls: ['./project.scss']
})
export class ProjectComponent extends ComponentBase {
    constructor() {
        super();
    }
}
