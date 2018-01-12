import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { map, switchMap } from 'rxjs/operators';
import { ComponentBase } from 'utils/components';
import { ProjectService } from "services";
import { Project } from "models";

@Component({
    templateUrl: './project.html',
    styleUrls: ['./project.scss']
})
export class ProjectComponent extends ComponentBase {
    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute
    ) {
        super();
    }
    
    ngOnInit() {
        super.ngOnInit();
        
        this.projectObservable = this.route.paramMap.pipe(
            map(params => params.get('projectSlug')),
            switchMap(slug => this.projectService.findBySlug(slug || ''))
        );
    }
    
    projectObservable: Observable<Project | null>;
}
