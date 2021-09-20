import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HoudiniPracticeService } from 'src/shared/services/houdini-practice.service';
import { HoudiniDailyPractice } from 'src/shared/models/houdini-daily-practice';

@Component({
  templateUrl: './practice-index.component.html',
  styleUrls: ['./practice-index.component.scss']
})
export class PracticeIndexComponent {
  dailyPractice$!: Observable<HoudiniDailyPractice[] | null>;

  constructor(
    private houdiniPracticeService: HoudiniPracticeService
  ) { }

  ngOnInit() {
    this.dailyPractice$ = this.houdiniPracticeService.getAllPractices();
  }
}
