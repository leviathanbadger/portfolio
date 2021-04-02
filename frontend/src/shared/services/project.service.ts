import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Project, ManagedProject } from '../models/project';

@Injectable()
export class ProjectService {
  private allProjects$!: Observable<ManagedProject[]>;

  constructor(
    private http: HttpClient
  ) {
    this.init();
  }

  private init() {
    this.allProjects$ = this.http.get<Project[]>('/api/projects').pipe(
      map(projects => {
        return projects.map(ManagedProject.fromProject);
      }),
      shareReplay(1)
    );
  }

  findBySlug(slug: string): Observable<ManagedProject | null> {
    return this.allProjects$.pipe(
      map(projects => projects.find(proj => proj.slug === slug) || null)
    );
  }
  searchProjects(filter: string): Observable<ManagedProject[]> {
    return this.allProjects$.pipe(
      map(projects => {
        return projects
          .map(proj => proj.matchFilter(filter))
          .sort(kvp => -kvp.relevance)
          .filter(kvp => kvp.relevance >= .5)
          .map(kvp => kvp.project);
      })
    );
  }
}
