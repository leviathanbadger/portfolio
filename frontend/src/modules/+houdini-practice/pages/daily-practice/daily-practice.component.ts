import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { SlideshowItem } from 'src/shared/components/slideshow/slideshow.component';
import { HoudiniPracticeService } from 'src/shared/services/houdini-practice.service';
import { HoudiniDailyPractice } from 'src/shared/models/houdini-daily-practice';
import { isResultResolved, Result } from 'src/shared/models/result';

@Component({
  templateUrl: './daily-practice.component.html',
  styleUrls: ['./daily-practice.component.scss']
})
export class DailyPracticeComponent {
  practiceResult$!: Observable<Result<HoudiniDailyPractice>>;

  slideshowItems$!: Observable<SlideshowItem[]>;
  referenceSlideshowItems$!: Observable<SlideshowItem[]>;

  constructor(
    private houdiniPracticeService: HoudiniPracticeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.practiceResult$ = this.route.paramMap.pipe(
      map(params => params.get('practiceId')),
      switchMap(id => this.houdiniPracticeService.findById(id || 'latest'))
    );

    this.slideshowItems$ = this.practiceResult$.pipe(
      filter(isResultResolved),
      map(practice_r => practice_r.result),
      map(practice => {
        if (!practice) return [];
        return practice.assets;
      })
    );

    this.referenceSlideshowItems$ = this.practiceResult$.pipe(
      filter(isResultResolved),
      map(practice_r => practice_r.result),
      map(practice => {
        if (!practice) return [];
        return practice.referenceAssets;
      })
    );
  }
}
