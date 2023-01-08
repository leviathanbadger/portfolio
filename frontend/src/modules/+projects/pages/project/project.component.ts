import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs/operators';
import { ProjectService } from 'src/shared/services/project.service';
import { ManagedProject } from 'src/shared/models/project';
import { Result } from 'src/shared/models/result';
import { ProjectProvider } from '../../providers/project-provider';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectProvider]
})
export class ProjectComponent {
  projectResult$!: Observable<Result<ManagedProject>>;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private projectProvider: ProjectProvider
  ) { }

  ngOnInit() {
    this.projectResult$ = this.route.paramMap.pipe(
      map(params => params.get('projectSlug')),
      switchMap(slug => this.projectService.findBySlug(slug || '')),
      distinctUntilChanged(),
      shareReplay(1)
    );
    this.projectProvider.projectResult$ = this.projectResult$;
  }
}
