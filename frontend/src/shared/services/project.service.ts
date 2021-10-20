import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { Project, ManagedProject } from '../models/project';
import { Result } from '../models/result';

@Injectable()
export class ProjectService {
  private allProjects$!: Observable<Result<ManagedProject[]>>;

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
}
