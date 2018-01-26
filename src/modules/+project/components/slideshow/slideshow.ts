import { Component, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
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
    styleUrls: ['./slideshow.scss']
})
export class SlideshowComponent extends ComponentBase {
    constructor() {
        super();
    }
    
    @Input() items: SlideshowItemT[];
    
    currentIdx = 0;
    
    onKeyDown(e: KeyboardEvent) {
        console.log(e);
        
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
