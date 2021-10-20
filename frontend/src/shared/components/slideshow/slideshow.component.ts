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
  @Input()
  shouldAutofocus: boolean = true;
  @Input()
  autofocusDelay: number = 0;

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
