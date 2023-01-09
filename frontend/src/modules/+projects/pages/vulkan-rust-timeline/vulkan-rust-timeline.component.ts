import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft, faArrowRight, faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { combineLatest, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { ObservableInput } from 'src/shared/directives/observable-input.directive';
import { isResultDoneLoading, isResultResolved, Result } from 'src/shared/models/result';
import { RustEngineTimelineEntry } from 'src/shared/models/rust-engine-timeline-entry';
import { ProjectService } from 'src/shared/services/project.service';
import { ProjectProvider } from '../../providers/project-provider';

@Component({
  templateUrl: './vulkan-rust-timeline.component.html',
  styleUrls: ['./vulkan-rust-timeline.component.scss'],
  providers: [ProjectProvider],
  animations: [
    trigger('staggerarrive', [
      transition(':enter', [
        query('.filter-section', [
          style({ 'opacity': 0, 'transform': 'translate(20px)' }),
          stagger('.1s', [
            animate('.2s ease-in', style({ 'opacity': 1, 'transform': 'none' }))
          ])
        ])
      ])
    ]),
    trigger('fadeInOnly', [
      transition(':enter', [
        style({ 'opacity': 0 }),
        animate('.1s', style({ 'opacity': 1 }))
      ]),
      transition(':leave', [])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ 'opacity': 0 }),
        animate('.1s', style({ 'opacity': 1 }))
      ]),
      transition(':leave', [
        animate('.1s', style({ 'opacity': 0 }))
      ])
    ])
  ]
})
export class VulkanRustTimelineComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  @ObservableInput() includeBloopers: boolean = true;
  includeBloopers$!: Observable<boolean>;

  timelineEventsResult$!: Observable<Result<RustEngineTimelineEntry[]>>;
  timelineEvents$!: Observable<RustEngineTimelineEntry[]>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  selectedId$!: Observable<string | null>;

  faCircle = faCircle;
  faStar = faStar;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  ngOnInit(): void {
    this.timelineEventsResult$ = this.includeBloopers$.pipe(
      switchMap(includeBloopers => this.projectService.getAllRustEngineTimelineEntries(includeBloopers))
    );

    this.timelineEvents$ = this.timelineEventsResult$.pipe(
      filter(isResultResolved),
      map(events_r => events_r.result! || []),
      debounceTime(0)
    );

    this.error$ = this.timelineEventsResult$.pipe(
      filter(isResultDoneLoading),
      map(events_r => events_r.isError ? events_r.error : null),
      distinctUntilChanged()
    );

    this.isLoading$ = this.timelineEventsResult$.pipe(
      map(events_r => events_r.isLoading),
      distinctUntilChanged()
    );

    let selectedParam = this.route.firstChild!.paramMap.pipe(
      map(params => params.get('entryId')),
      tap(console.log.bind(console)),
      distinctUntilChanged()
    );

    this.selectedId$ = combineLatest([selectedParam, this.timelineEvents$]).pipe(
      map(([entryId, timelineEvents]) => {
        if (!timelineEvents) return entryId;
        if (entryId === 'latest') return `${timelineEvents[timelineEvents.length - 1].id}`;
        return entryId;
      }),
      distinctUntilChanged(),
      shareReplay(1)
    );
  }

  public trackById(index: number, item: { id: number }) {
    return item.id;
  }

  public getTimelineEventOffsetByIndex(entries: RustEngineTimelineEntry[], i: number): string {
    let offsetPixels = (i - (entries.length - 1)) * 60;
    return `calc(50vw + ${offsetPixels}px)`;
  }
  public getTimelineEventOffsetById(entries: RustEngineTimelineEntry[], id: string | null): string {
    let idx = entries.findIndex(entry => `${entry.id}` == id);
    if (idx !== 0 && !idx) return '0px';
    return this.getTimelineEventOffsetByIndex(entries, idx);
  }
}
