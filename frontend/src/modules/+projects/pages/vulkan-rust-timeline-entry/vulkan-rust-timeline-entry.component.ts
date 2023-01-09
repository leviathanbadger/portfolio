import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, switchMap, distinctUntilChanged, shareReplay, debounceTime } from 'rxjs/operators';
import { SlideshowItem } from 'src/shared/components/slideshow/slideshow.component';
import { ProjectService } from 'src/shared/services/project.service';
import { RustEngineTimelineEntry } from 'src/shared/models/rust-engine-timeline-entry';
import { isResultDoneLoading, isResultResolved, Result } from 'src/shared/models/result';

@Component({
  templateUrl: './vulkan-rust-timeline-entry.component.html',
  styleUrls: ['./vulkan-rust-timeline-entry.component.scss']
})
export class VulkanRustTimelineEntryComponent {
  entryResult$!: Observable<Result<RustEngineTimelineEntry>>;
  entry$!: Observable<RustEngineTimelineEntry>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  slideshowItems$!: Observable<SlideshowItem[]>;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.entryResult$ = this.route.paramMap.pipe(
      map(params => params.get('entryId')),
      switchMap(id => this.projectService.findRustEngineTimelineEntryById(id || 'latest')),
      distinctUntilChanged(),
      shareReplay(1)
    );

    this.entry$ = this.entryResult$.pipe(
      filter(isResultResolved),
      map(events_r => events_r.result! || []),
      debounceTime(0)
    );

    this.error$ = this.entryResult$.pipe(
      filter(isResultDoneLoading),
      map(events_r => events_r.isError ? events_r.error : null),
      distinctUntilChanged()
    );

    this.isLoading$ = this.entryResult$.pipe(
      map(events_r => events_r.isLoading),
      distinctUntilChanged()
    );

    this.slideshowItems$ = this.entry$.pipe(
      map(practice => {
        if (!practice) return [];
        return practice.assets;
      })
    );
  }
}
