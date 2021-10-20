import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
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
  searchPractices(filter: string): Observable<HoudiniDailyPractice[]> {
    // TODO: query on API instead
    return this.getAllPractices().pipe(
      map(practices => {
        if (!filter) return practices;
        return practices
          .map(practice => this.practiceMatchFilter(practice, filter))
          .sort(kvp => -kvp.relevance)
          .filter(kvp => kvp.relevance >= .5)
          .map(kvp => kvp.practice);
      })
    );
  }
  findById(id: string): Observable<HoudiniDailyPractice | null> {
    return this.http.get<HoudiniDailyPractice>(`/api/houdini/daily-practice/${encodeURIComponent(id)}`).pipe(
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
