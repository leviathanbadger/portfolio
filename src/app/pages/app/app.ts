import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentBase } from 'utils/components';

@Component({
    selector: 'app',
    templateUrl: './app.html',
    styleUrls: ['./app.scss']
})
export class AppComponent extends ComponentBase {
    constructor(
        router: Router
    ) {
        super();
        (<any>window).router = router;
    }
}
