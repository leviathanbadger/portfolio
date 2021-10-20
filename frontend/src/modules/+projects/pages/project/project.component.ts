import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { SlideshowItem } from 'src/shared/components/slideshow/slideshow.component';
import { ProjectService } from 'src/shared/services/project.service';
import { ManagedProject } from 'src/shared/models/project';
import { isResultResolved, Result } from 'src/shared/models/result';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  projectResult$!: Observable<Result<ManagedProject>>;

  slideshowItems$!: Observable<SlideshowItem[]>;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projectResult$ = this.route.paramMap.pipe(
      map(params => params.get('projectSlug')),
      switchMap(slug => this.projectService.findBySlug(slug || ''))
    );

    this.slideshowItems$ = this.projectResult$.pipe(
      filter(isResultResolved),
      map(project_r => project_r.result),
      map(proj => {
        if (!proj) return [];
        return proj.images.map(img => <SlideshowItem>({
          type: 'image',
          src: img
        }));
      })
    );
  }
}
