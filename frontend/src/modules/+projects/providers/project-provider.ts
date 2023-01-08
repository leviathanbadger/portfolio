import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagedProject } from 'src/shared/models/project';
import { Result } from 'src/shared/models/result';

@Injectable()
export class ProjectProvider {
  constructor() { }

  projectResult$!: Observable<Result<ManagedProject>>;
}
