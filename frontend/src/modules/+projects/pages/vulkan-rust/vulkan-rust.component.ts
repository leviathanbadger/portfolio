import { Component } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { animate, animateChild, group, query, sequence, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { ProjectService } from 'src/shared/services/project.service';
import { ManagedProject } from 'src/shared/models/project';
import { Result } from 'src/shared/models/result';
import { ProjectProvider } from '../../providers/project-provider';

@Component({
  templateUrl: './vulkan-rust.component.html',
  styleUrls: ['./vulkan-rust.component.scss'],
  providers: [ProjectProvider],
  animations: [
    trigger('subsection', [
      transition('* => *', [
        group([
          sequence([
            style({ opacity: 0 }),
            animate('.2s ease-in', style({ opacity: 1 })),
          ]),
          query('@*', [
            animateChild()
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class VulkanRustComponent {
  projectResult$!: Observable<Result<ManagedProject>>;
  subsection$!: Observable<string>;

  constructor(
    private projectService: ProjectService,
    private projectProvider: ProjectProvider,
    private router: Router,
    private startSnapshot: ActivatedRoute
  ) { }

  private uniqueCounter = 0;

  ngOnInit() {
    this.projectResult$ = this.projectService.findBySlug('vulkan-rust-game-engine');
    this.projectProvider.projectResult$ = this.projectResult$;

    this.subsection$ = this.router.events.pipe(
      filter(e => e instanceof RoutesRecognized),
      map(e => (<RoutesRecognized>e).state.root),
      startWith(this.startSnapshot.snapshot),
      map(snapshot => {
        let subsection = null;
        while (snapshot.firstChild) {
          snapshot = snapshot.firstChild;
          let data = (snapshot && snapshot.data) || {};
          if (!!data.subsection) subsection = data.subsection;
        }
        return subsection || `unique${this.uniqueCounter++}`;
      })
    );
  }
}
