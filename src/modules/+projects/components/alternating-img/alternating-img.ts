import { Component, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { ComponentBase } from 'utils/components';
import areEqual = require('lodash.isequal');

const NEXT_IMAGE_INTERVAL_MIN_MILLIS = 3000;
const NEXT_IMAGE_INTERVAL_MAX_MILLIS = 8000;
function getIntervalMillis() {
    return Math.floor(NEXT_IMAGE_INTERVAL_MIN_MILLIS + Math.random() * (NEXT_IMAGE_INTERVAL_MAX_MILLIS - NEXT_IMAGE_INTERVAL_MIN_MILLIS));
}

@Component({
    selector: 'alternating-img[src]',
    templateUrl: './alternating-img.html',
    styleUrls: ['./alternating-img.scss'],
    animations: [
        trigger('lastSrc', [
            transition('* => *', [
                style({ visibility: 'visible', opacity: '1' }),
                animate('.5s', style({ opacity: '0' }))
            ])
        ])
    ]
})
export class AlternatingImage extends ComponentBase {
    constructor() {
        super();
    }
    
    private _sources: string[];
    @Input('src') set sources(val: string | string[]) {
        if (typeof val === 'string') val = [val];
        if (areEqual(this._sources, val)) return;
        this._sources = val;
        if (!this.currentSrc || this._sources.indexOf(this.currentSrc) === -1) this.updateCurrentSrc();
    }
    
    @Input() alt: string;
    
    currentSrc: string | null = null;
    lastSrc: string | null = null;
    private updateCurrentSrc() {
        this.resetUpdateSrcInterval();
        this.lastSrc = this.currentSrc;
        if (this._sources.length === 0) {
            this.currentSrc = null;
            return;
        }
        let idx = Math.floor(this._sources.length * Math.random());
        if (this._sources[idx] === this.currentSrc && this._sources.length > 1) idx = (idx + 1) % this._sources.length;
        this.currentSrc = this._sources[idx];
    }
    
    private updateSrcInterval: any;
    private resetUpdateSrcInterval() {
        if (this.updateSrcInterval) {
            clearTimeout(this.updateSrcInterval);
            this.updateSrcInterval = null;
        }
        this.updateSrcInterval = setInterval(() => this.updateCurrentSrc(), getIntervalMillis());
    }
}
