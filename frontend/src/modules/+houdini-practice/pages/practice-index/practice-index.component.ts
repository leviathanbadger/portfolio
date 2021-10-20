import { Component, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, animate, style, stagger, query } from '@angular/animations';
import { Observable, ReplaySubject } from 'rxjs';
import { tap, startWith, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HoudiniPracticeService } from 'src/shared/services/houdini-practice.service';
import { HoudiniDailyPractice } from 'src/shared/models/houdini-daily-practice';

const FILTER_DEBOUNCE_MILLIS = 500;

const HIDE_FLEX = {
  'max-width': '0',
  'overflow': 'hidden',
  'max-height': '99999px',
  'margin': '0',
  'padding': '0'
};
const SHOW_FLEX = {
  'max-width': '99999px',
  'overflow': 'auto',
  'max-height': '99999px',
  'margin': '16px 0 0 0',
  'padding': '0 15px'
};

@Component({
  templateUrl: './practice-index.component.html',
  styleUrls: ['./practice-index.component.scss'],
  animations: [
    trigger('practiceChangeIdx', [
      transition('* => *', [
        query('.should-animate:enter', [
          style({ opacity: 0, transform: 'translateY(50px)', ...HIDE_FLEX })
        ], { optional: true }),
        query('.should-animate:not(:enter)', [
          stagger('10ms', [
            animate('.1s', style({ opacity: 0, transform: 'translateY(50px)' }))
          ])
        ], { optional: true }),
        query('.should-animate', [
          style(HIDE_FLEX)
        ], { optional: true }),
        query('.should-animate:not(:leave)', [
          stagger('10ms', [
            style(SHOW_FLEX),
            animate('.1s ease-in', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PracticeIndexComponent {
  filter$!: Observable<string>;
  dailyPractice$!: Observable<HoudiniDailyPractice[] | null>;

  constructor(
    private houdiniPracticeService: HoudiniPracticeService
  ) { }

  @ViewChild('filterEl') filterEl!: ElementRef;

  ngOnInit() {
    this.filter$ = this.filterSubject.asObservable().pipe(
      debounceTime(FILTER_DEBOUNCE_MILLIS),
      startWith(''),
      distinctUntilChanged()
    );

    this.dailyPractice$ = this.filter$.pipe(
      switchMap(filter => this.houdiniPracticeService.searchPractices(filter)),
      tap(_ => this.practiceChangeIdx++)
    );
  }

  private _filter: string = '';
  get filter(): string {
    return this._filter;
  }
  set filter(val: string) {
    if (this._filter === val) return;
    this._filter = val;
    this.filterSubject.next(val);
  }
  private filterSubject = new ReplaySubject<string>(1);

  clearFilter() {
    this.filter = '';
    if (this.filterEl && this.filterEl.nativeElement) this.filterEl.nativeElement.focus();
  }

  practiceChangeIdx = 0;

  public trackById(index: number, item: HoudiniDailyPractice) {
    return item.id;
  }
}
