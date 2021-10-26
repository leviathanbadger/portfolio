import { Component, Input } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

export type SlideshowImageItem = {
  type: 'image',
  src: string
};
export type SlideshowVideoItem = {
  type: 'video',
  src: string
};

export type SlideshowItem = SlideshowImageItem | SlideshowVideoItem;

@Component({
  selector: 'bls-slideshow[items]',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
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
export class SlideshowComponent {
  @Input()
  items!: SlideshowItem[];

  @Input() aspectRatioType: string = 'normal';

  currentIdx = 0;

  canMovePrevious() {
    return this.currentIdx > 0;
  }
  movePreviousItem() {
    if (this.currentIdx > 0) {
      this.currentIdx--;
      return true;
    }
    return false;
  }
  canMoveNext() {
    return this.currentIdx < this.items.length - 1;
  }
  moveNextItem() {
    if (this.currentIdx < this.items.length - 1) {
      this.currentIdx++;
      return true;
    }
    return false;
  }

  canMoveAny() {
    return this.items.length > 1;
  }
  moveItem(item: SlideshowItem, index: number) {
    if (index >= 0 && index < this.items.length) {
      this.currentIdx = index;
      return true;
    }
    return false;
  }
}
