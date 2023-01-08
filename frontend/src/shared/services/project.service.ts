import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { Project, ManagedProject } from '../models/project';
import { RustEngineTimelineEntry } from '../models/rust-engine-timeline-entry';
import { Result } from '../models/result';

@Injectable()
export class ProjectService {
  private allProjects$!: Observable<Result<ManagedProject[]>>;
  private allRustEngineTimelineEntries$!: Observable<Result<RustEngineTimelineEntry[]>>;

  constructor(
    private http: HttpClient
  ) {
    this.init();
  }

  private init() {
    this.allProjects$ = this.http.get<Project[]>('/api/projects').pipe(
      map(projects => {
        return {
          isLoading: false,
          isError: false,
          result: projects.map(ManagedProject.fromProject)
        } as Result<ManagedProject[]>;
      }),
      startWith({ isLoading: true } as Result<ManagedProject[]>),
      shareReplay(1)
    );

    this.allRustEngineTimelineEntries$ = this.http.get<RustEngineTimelineEntry[]>('/api/rust-engine/timeline-entries').pipe(
      map(entries => {
        return {
          isLoading: false,
          isError: false,
          result: entries
        } as Result<RustEngineTimelineEntry[]>;
      }),
      startWith({ isLoading: true } as Result<RustEngineTimelineEntry[]>),
      shareReplay(1)
    );
  }

  getAllProjects(): Observable<Result<ManagedProject[]>> {
    return this.allProjects$;
  }
  searchProjects(filter: string): Observable<Result<ManagedProject[]>> {
    // TODO: query on API instead
    return this.getAllProjects().pipe(
      map(projects_r => {
        if (projects_r.isLoading || projects_r.isError) return projects_r;
        if (!filter) return projects_r;
        let projects = (projects_r.result || [])
          .map(proj => proj.matchFilter(filter))
          .sort(kvp => -kvp.relevance)
          .filter(kvp => kvp.relevance >= .5)
          .map(kvp => kvp.project);
        return { isLoading: false, isError: false, result: projects };
      })
    );
  }
  findBySlug(slug: string): Observable<Result<ManagedProject>> {
    return this.getAllProjects().pipe(
      map(projects_r => {
        if (projects_r.isLoading || projects_r.isError) return projects_r;
        let project = (projects_r.result || []).find(proj => proj.slug === slug) || null;
        return { isLoading: false, isError: false, result: project };
      })
    );
  }

  getAllRustEngineTimelineEntries(includeBloopers: boolean): Observable<Result<RustEngineTimelineEntry[]>> {
    let result$ = this.allRustEngineTimelineEntries$;
    if (!includeBloopers) {
      result$ = result$.pipe(
        map(r => {
          if (r.isLoading) return r;
          else if (r.isError) return r;
          else if (!r.result) return r;
          else return {
            isLoading: false,
            isError: false,
            result: r.result.filter(entry => !entry.isBlooper)
          };
        })
      );
    }
    return result$;
  }
  findRustEngineTimelineEntryById(id: string): Observable<Result<RustEngineTimelineEntry>> {
    return this.http.get<RustEngineTimelineEntry>(`/api/rust-engine/timeline-entry/${encodeURIComponent(id)}`).pipe(
      map(entry => {
        return {
          isLoading: false,
          isError: false,
          result: entry
        } as Result<RustEngineTimelineEntry>;
      }),
      startWith({ isLoading: true } as Result<RustEngineTimelineEntry>),
      shareReplay(1)
    );
  }
}
