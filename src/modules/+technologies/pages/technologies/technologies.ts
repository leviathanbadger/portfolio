import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './technologies.html',
    styleUrls: ['./technologies.scss']
})
export class TechnologiesComponent extends ComponentBase {
    constructor() {
        super();
    }
}
