import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ProjectService } from 'src/shared/services/project.service';
import { ManagedProject } from 'src/shared/models/project';
import { SlideshowItem } from '../../components/slideshow/slideshow.component';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  project$!: Observable<ManagedProject | null>;

  slideshowItems$!: Observable<SlideshowItem[]>;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.project$ = this.route.paramMap.pipe(
      map(params => params.get('projectSlug')),
      switchMap(slug => this.projectService.findBySlug(slug || ''))
    );

    this.slideshowItems$ = this.project$.pipe(
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
