import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'services';

import { ComponentBase } from 'shared/util';

@Component({
    selector: 'repo-detail',
    styleUrls: ['./repo-detail.scss'],
    templateUrl: './repo-detail.html'
})
export class RepoDetailComponent extends ComponentBase implements OnInit {
    constructor(public github: GithubService, private route: ActivatedRoute) {
        super();
    }
    
    private org: string;
    private repo: string;
    public repoDetails: any = {};
    
    ngOnInit() {
        super.ngOnInit();
        this.route.params.subscribe(params => {
            this.org = this.route.snapshot.parent.params['org'];
            this.repo = params['repo'] || '';
            
            if (this.repo) {
                this.github.getRepoForOrg(this.org, this.repo)
                    .subscribe(repoDetails => this.repoDetails = repoDetails);
            }
        });
    }
}
