import { Component, Input } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { ComponentBase } from 'utils/components';
import areEqual = require('lodash.isequal');

export type SlideshowImageItemT = {
    type: 'image',
    src: string
};
export type SlideshowVideoItemT = {
    type: 'video',
    src: string
};

export type SlideshowItemT = SlideshowImageItemT | SlideshowVideoItemT;

@Component({
    selector: 'slideshow[items]',
    templateUrl: './slideshow.html',
    styleUrls: ['./slideshow.scss'],
    animations: [
        trigger('pullFromBottom', [
            transition('* => *', [
                query('.slideshow-item:enter', [
                    style({ transform: 'translateY(100%)' }),
                    stagger('300ms', animate('.5s 100ms ease-in', style({ transform: 'translateY(0%)' })))
                ], { optional: true })
            ])
        ])
    ]
})
export class SlideshowComponent extends ComponentBase {
    constructor() {
        super();
    }
    
    @Input() items: SlideshowItemT[];
    @Input() shouldAutofocus: boolean = true;
    @Input() autofocusDelay: number = 0;
    
    currentIdx = 0;
    
    onKeyDown(e: KeyboardEvent) {
        let handled = false;
        if (e.key === 'ArrowLeft' && this.movePreviousItem()) handled = true;
        else if (e.key === 'ArrowRight' && this.moveNextItem()) handled = true;
        
        if (handled) {
            e.stopImmediatePropagation();
            e.preventDefault();
        }
    }
    
    movePreviousItem() {
        if (this.currentIdx > 0) {
            this.currentIdx--;
            return true;
        }
        return false;
    }
    moveNextItem() {
        if (this.currentIdx < this.items.length - 1) {
            this.currentIdx++;
            return true;
        }
        return false;
    }
}
