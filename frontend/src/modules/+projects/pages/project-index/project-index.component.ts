import { Component, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, animate, style, stagger, query } from '@angular/animations';
import { Observable, ReplaySubject } from 'rxjs';
import { tap, map, filter, startWith, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ProjectService } from 'src/shared/services/project.service';
import { ManagedProject } from 'src/shared/models/project';
import { isResultDoneLoading, isResultResolved, Result } from 'src/shared/models/result';

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
  templateUrl: './project-index.component.html',
  styleUrls: ['./project-index.component.scss'],
  animations: [
    trigger('projectChangeIdx', [
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
export class ProjectIndexComponent {
  filter$!: Observable<string>;
  projectsResult$!: Observable<Result<ManagedProject[]>>;
  projects$!: Observable<ManagedProject[]>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(
    private projectService: ProjectService
  ) { }

  @ViewChild('filterEl') filterEl!: ElementRef;

  ngOnInit() {
    this.filter$ = this.filterSubject.asObservable().pipe(
      debounceTime(FILTER_DEBOUNCE_MILLIS),
      startWith(''),
      distinctUntilChanged()
    );

    this.projectsResult$ = this.filter$.pipe(
      switchMap(filter => this.projectService.searchProjects(filter)),
    );

    this.projects$ = this.projectsResult$.pipe(
      filter(isResultResolved),
      map(projects_r => projects_r.result! || []),
      debounceTime(0),
      tap(_ => this.projectChangeIdx++)
    );

    this.error$ = this.projectsResult$.pipe(
      filter(isResultDoneLoading),
      map(projects_r => projects_r.isError ? projects_r.error : null),
      distinctUntilChanged()
    );

    this.isLoading$ = this.projectsResult$.pipe(
      map(projects_r => projects_r.isLoading),
      distinctUntilChanged()
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

  projectChangeIdx = 0;

  public trackBySlug(index: number, item: ManagedProject) {
    return item.slug;
  }
}
