import { Component } from '@angular/core';

import { ComponentBase } from 'shared/util';

const DELAY_MILLIS = 1000;

@Component({
    selector: 'home',
    styleUrls: ['./home.scss'],
    templateUrl: './home.html'
})
export class HomeComponent extends ComponentBase {
    constructor() {
        super();
    }
    
    private delay(time: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => resolve(), time);
        });
    }
    
    asyncTaskResult: string = '';
    runningAsyncTask: boolean = false;
    async startAsyncTask() {
        if (this.runningAsyncTask) return;
        this.runningAsyncTask = true;
        
        await this.delay(DELAY_MILLIS);
        
        this.asyncTaskResult = 'Everything worked great!';
        this.runningAsyncTask = false;
    }
}
