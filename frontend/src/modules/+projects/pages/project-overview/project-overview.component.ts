import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { SlideshowItem } from 'src/shared/components/slideshow/slideshow.component';
import { ManagedProject } from 'src/shared/models/project';
import { isResultResolved } from 'src/shared/models/result';
import { ProjectProvider } from '../../providers/project-provider';

@Component({
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent {
  project$!: Observable<ManagedProject>;
  slideshowItems$!: Observable<SlideshowItem[]>;

  constructor(
    private projectProvider: ProjectProvider
  ) { }

  ngOnInit() {
    this.project$ = this.projectProvider.projectResult$.pipe(
      filter(isResultResolved),
      map(project_r => project_r.result!)
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
