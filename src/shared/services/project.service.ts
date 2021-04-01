import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../models/project';

@Injectable()
export class ProjectService {
  findBySlug(slug: string): Observable<Project | null> {
    return this.findAll().pipe(
      map(projects => projects.find(proj => proj.slug === slug) || null)
    );
  }
  findAll(): Observable<Project[]> {
    return of([...allProjects]);
  }
}
