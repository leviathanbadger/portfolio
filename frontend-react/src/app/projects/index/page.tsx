'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { debounceTime } from 'rxjs';
import { autofocusElement, useObservable, useReplaySubject } from '@/utils';
import './page.scss';

const FILTER_DEBOUNCE_MILLIS = 500;

function ProjectIndex() {
    const [filter, setFilter, filter$] = useReplaySubject('');
    const filterInput = useRef<HTMLInputElement | null>(null);
    autofocusElement(filterInput);
    function clearFilter() {
        setFilter('');
        filterInput.current?.focus();
    }

    const debouncedFilter$ = filter$.pipe(
        debounceTime(FILTER_DEBOUNCE_MILLIS)
    );
    const [debouncedFilter] = useObservable(debouncedFilter$, '');

    const clearFilterBtn = !!filter && (<button className="btn btn-link btn-clear-filter" onClick={clearFilter}>&#10005;</button>);

    return (
        <div className="section tile-list">
            <div className="container">
                <div className="row">
                    <div className="col-12 title">
                        <div className="button-links">
                            <Link href="/projects/current" className="mx-3 mt-4 btn btn-primary">
                                Current Project
                            </Link>
                        </div>

                        <h1 className="mt-3">Projects</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 project-filter-wrapper">
                        <input
                          type="text"
                          value={filter}
                          onChange={e => setFilter(e.target.value)}
                          className="form-control project-filter"
                          placeholder="Search"
                          ref={filterInput}
                        />
                        {clearFilterBtn}
                        {debouncedFilter}
                    </div>
                </div>

                {/* <div className="row" *ngIf="(projects$ | async) || (error$ | async); else initialLoadingSpinner" [class.loading]="isLoading$ | async" [@projectChangeIdx]="projectChangeIdx">
                    <ng-container *ngIf="(error$ | async) as error">
                        <div className="col-12">
                        <p>An error occurred: {{error}}</p>
                        </div>
                    </ng-container>

                    <ng-container *ngIf="(!(error$ | async)) && (projects$ | async) as projects">
                        <ng-container *ngIf="projects.length; else noProjects">
                        <div className="col-md-4 mt-3 should-animate" *ngFor="let project of projects; trackBy: trackBySlug">
                            <div className="card link-card" [routerLink]="["/", "projects", project.slug]">
                            <div className="card-img-top">
                                <bls-alternating-img [src]="project.thumbnails" [alt]="project.name" aspectRatioType="project"></bls-alternating-img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                {{project.name}}
                                </h5>
                                <p className="card-text">{{project.description}}</p>
                                <a [routerLink]="["/", "projects", project.slug]" className="btn btn-primary">Details</a>
                                <a *ngFor="let link of project.links" [href]="link[1]" target="_blank" className="btn btn-default">{{link[0]}}</a>
                            </div>
                            </div>
                        </div>
                        </ng-container>

                        <ng-template #noProjects>
                        <div className="col-12">
                            <p>No projects matched your search.</p>
                        </div>
                        </ng-template>
                    </ng-container>
                </div> */}

                {/* <ng-template #initialLoadingSpinner>
                    <bls-loading-spinner></bls-loading-spinner>
                </ng-template> */}
            </div>
        </div>
    );
}

export default ProjectIndex;
