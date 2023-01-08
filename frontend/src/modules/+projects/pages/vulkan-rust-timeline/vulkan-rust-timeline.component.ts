import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { ObservableInput } from 'src/shared/directives/observable-input.directive';
import { isResultDoneLoading, isResultResolved, Result } from 'src/shared/models/result';
import { RustEngineTimelineEntry } from 'src/shared/models/rust-engine-timeline-entry';
import { ProjectService } from 'src/shared/services/project.service';
import { ProjectProvider } from '../../providers/project-provider';

@Component({
  templateUrl: './vulkan-rust-timeline.component.html',
  styleUrls: ['./vulkan-rust-timeline.component.scss'],
  providers: [ProjectProvider]
})
export class VulkanRustTimelineComponent implements OnInit {
  constructor(
    private projectService: ProjectService
  ) { }

  @ObservableInput() includeBloopers: boolean = false;
  includeBloopers$!: Observable<boolean>;

  timelineEventsResult$!: Observable<Result<RustEngineTimelineEntry[]>>;
  timelineEvents$!: Observable<RustEngineTimelineEntry[]>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  ngOnInit(): void {
    this.timelineEventsResult$ = this.includeBloopers$.pipe(
      switchMap(includeBloopers => this.projectService.getAllRustEngineTimelineEntries(includeBloopers))
    );

    this.timelineEvents$ = this.timelineEventsResult$.pipe(
      filter(isResultResolved),
      map(events_r => events_r.result! || []),
      debounceTime(0)
    );

    this.error$ = this.timelineEventsResult$.pipe(
      filter(isResultDoneLoading),
      map(events_r => events_r.isError ? events_r.error : null),
      distinctUntilChanged()
    );

    this.isLoading$ = this.timelineEventsResult$.pipe(
      map(events_r => events_r.isLoading),
      distinctUntilChanged()
    );
  }

  public trackById(index: number, item: { id: number }) {
    return item.id;
  }
}
