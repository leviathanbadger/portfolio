import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { HoudiniDailyPractice } from '../models/houdini-daily-practice';

@Injectable()
export class HoudiniPracticeService {
  private allDailyPractices$!: Observable<HoudiniDailyPractice[]>;

  constructor(
    private http: HttpClient
  ) {
    this.init();
  }

  private init() {
    this.allDailyPractices$ = this.http.get<HoudiniDailyPractice[]>('/api/houdini/daily-practice').pipe(
      shareReplay(1)
    );
  }

  getAllPractices(): Observable<HoudiniDailyPractice[]> {
    return this.allDailyPractices$;
  }
  findById(id: string): Observable<HoudiniDailyPractice | null> {
    return this.http.get<HoudiniDailyPractice>(`/api/houdini/daily-practice/${id}`).pipe(
      shareReplay(1)
    );
  }
}
