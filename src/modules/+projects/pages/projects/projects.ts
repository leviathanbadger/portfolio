import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators';
import 'rxjs/add/observable/fromPromise';
import { ComponentBase } from 'utils/components';
import { ProjectService } from 'services';
import { Project } from 'models';

@Component({
    templateUrl: './projects.html',
    styleUrls: ['./projects.scss']
})
export class ProjectsComponent extends ComponentBase {
    constructor(
        private projectService: ProjectService
    ) {
        super();
    }
    
    ngOnInit() {
        super.ngOnInit();
        
        this.projectsObservable = Observable.fromPromise(this.projectService.findAll()).pipe(
            startWith<Project[] | null>(null)
        );
    }
    
    projectsObservable: Observable<Project[] | null>;
}
