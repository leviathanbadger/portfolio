import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { HoudiniDailyPractice } from '../models/houdini-daily-practice';
import { Result } from '../models/result';

@Injectable()
export class HoudiniPracticeService {
  private allDailyPractices$!: Observable<Result<HoudiniDailyPractice[]>>;

  constructor(
    private http: HttpClient
  ) {
    this.init();
  }

  private init() {
    this.allDailyPractices$ = this.http.get<HoudiniDailyPractice[]>('/api/houdini/daily-practice').pipe(
      map(practices => {
        return {
          isLoading: false,
          isError: false,
          result: practices
        } as Result<HoudiniDailyPractice[]>;
      }),
      startWith({ isLoading: true } as Result<HoudiniDailyPractice[]>),
      shareReplay(1)
    );
  }

  getAllPractices(): Observable<Result<HoudiniDailyPractice[]>> {
    return this.allDailyPractices$;
  }
  searchPractices(filter: string): Observable<Result<HoudiniDailyPractice[]>> {
    // TODO: query on API instead
    return this.getAllPractices().pipe(
      map(practices_r => {
        if (practices_r.isLoading || practices_r.isError) return practices_r;
        if (!filter) return practices_r;
        let practices = (practices_r.result || [])
          .map(practice => this.practiceMatchFilter(practice, filter))
          .sort(kvp => -kvp.relevance)
          .filter(kvp => kvp.relevance >= .5)
          .map(kvp => kvp.practice);
        return { isLoading: false, isError: false, result: practices };
      })
    );
  }
  findById(id: string): Observable<Result<HoudiniDailyPractice>> {
    return this.http.get<HoudiniDailyPractice>(`/api/houdini/daily-practice/${encodeURIComponent(id)}`).pipe(
      map(practice => {
        return {
          isLoading: false,
          isError: false,
          result: practice
        } as Result<HoudiniDailyPractice>;
      }),
      startWith({ isLoading: true } as Result<HoudiniDailyPractice>),
      shareReplay(1)
    );
  }

  private practiceMatchFilter(practice: HoudiniDailyPractice, filter: string): { practice: HoudiniDailyPractice, relevance: number } {
    filter = filter.toLowerCase();
    let terms = filter.split(' ');
    let searchName = practice.name.toLowerCase();
    let searchDesc = practice.description.toLowerCase();
    let searchTechs = practice.tags.map(tag => tag.toLowerCase().trim());
    let matchCount = 0;
    for (let term of terms) {
      let isMatch = searchName.indexOf(term) !== -1 || searchDesc.indexOf(term) !== -1 || searchTechs.some(tech => tech.indexOf(term) !== -1);
      if (isMatch) matchCount++;
    }
    matchCount /= terms.length;
    matchCount *= matchCount;
    return { practice, relevance: matchCount };
  }
}
