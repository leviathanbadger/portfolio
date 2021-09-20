import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HoudiniPracticeService } from 'src/shared/services/houdini-practice.service';
import { HoudiniDailyPractice } from 'src/shared/models/houdini-daily-practice';

@Component({
  templateUrl: './daily-practice.component.html',
  styleUrls: ['./daily-practice.component.scss']
})
export class DailyPracticeComponent {
  practice$!: Observable<HoudiniDailyPractice | null>;

  constructor(
    private houdiniPracticeService: HoudiniPracticeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.practice$ = this.route.paramMap.pipe(
      map(params => params.get('practiceId')),
      switchMap(id => this.houdiniPracticeService.findById(id || 'latest'))
    );
  }
}
