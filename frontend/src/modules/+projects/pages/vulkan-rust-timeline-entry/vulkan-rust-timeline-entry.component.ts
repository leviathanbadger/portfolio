import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, switchMap, distinctUntilChanged, shareReplay } from 'rxjs/operators';
import { SlideshowItem } from 'src/shared/components/slideshow/slideshow.component';
import { ProjectService } from 'src/shared/services/project.service';
import { RustEngineTimelineEntry } from 'src/shared/models/rust-engine-timeline-entry';
import { isResultResolved, Result } from 'src/shared/models/result';

@Component({
  templateUrl: './vulkan-rust-timeline-entry.component.html',
  styleUrls: ['./vulkan-rust-timeline-entry.component.scss']
})
export class VulkanRustTimelineEntryComponent {
  entryResult$!: Observable<Result<RustEngineTimelineEntry>>;

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

    this.slideshowItems$ = this.entryResult$.pipe(
      filter(isResultResolved),
      map(practice_r => practice_r.result),
      map(practice => {
        if (!practice) return [];
        return practice.assets;
      })
    );
  }
}
