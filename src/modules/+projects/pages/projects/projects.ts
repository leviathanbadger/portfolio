import { Component, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, animate, style, stagger, query } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from "rxjs/ReplaySubject";
import { map, startWith, combineLatest, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import 'rxjs/add/observable/fromPromise';
import { ComponentBase } from 'utils/components';
import { ProjectService } from 'services';
import { Project } from 'models';

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
    templateUrl: './projects.html',
    styleUrls: ['./projects.scss'],
    animations: [
        trigger('projectChangeIdx', [
            transition('* => *', [
                query('.should-animate:enter', [
                    style({ opacity: 0, transform: 'translateY(50px)', ...HIDE_FLEX })
                ], { optional: true }),
                query('.should-animate:not(:enter)', [
                    stagger('25ms', [
                        animate('.2s', style({ opacity: 0, transform: 'translateY(50px)' }))
                    ])
                ], { optional: true }),
                query('.should-animate', [
                    style(HIDE_FLEX)
                ], { optional: true }),
                query('.should-animate:not(:leave)', [
                    stagger('25ms', [
                        style(SHOW_FLEX),
                        animate('.2s ease-in', style({ opacity: 1, transform: 'none' }))
                    ])
                ], { optional: true })
            ])
        ])
    ]
})
export class ProjectsComponent extends ComponentBase {
    constructor(
        private projectService: ProjectService
    ) {
        super();
    }
    
    @ViewChild('filterEl') filterEl: ElementRef;
    
    ngOnInit() {
        super.ngOnInit();
        
        this.filterObservable = this.filterSubject.asObservable().pipe(
            debounceTime(FILTER_DEBOUNCE_MILLIS),
            startWith(''),
            distinctUntilChanged()
        );
        
        this.projectsObservable = Observable.fromPromise(this.projectService.findAll()).pipe(
            startWith<Project[] | null>(null),
            combineLatest(this.filterObservable),
            map(([projects, filter]) => {
                this.projectChangeIdx++;
                if (!projects || !filter) return projects;
                return projects
                    .map(proj => proj.matchFilter(filter))
                    .sort(kvp => -kvp.relevance)
                    .filter(kvp => kvp.relevance >= .5)
                    .map(kvp => kvp.project);
            })
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
    filterObservable: Observable<string>;
    
    clearFilter() {
        this.filter = '';
        if (this.filterEl && this.filterEl.nativeElement) this.filterEl.nativeElement.focus();
    }
    
    projectsObservable: Observable<Project[] | null>;
    projectChangeIdx = 0;
}
