import { Component } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRoute } from '@angular/router';
import { trigger, transition, query, style, animate, state } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { map, tap, filter, startWith, distinctUntilChanged } from 'rxjs/operators';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './layout.html',
    styleUrls: ['./layout.scss'],
    animations: [
        trigger('routeType', [
            transition('tile-list => tile', [
                // style({ 'overflow-x': 'hidden' }),
                query('.tile-list, .tile', [
                    style({ position: 'absolute' })
                ]),
                query('.tile', [
                    style({ transform: 'translateX(100%)' })
                ]),
                animate('.5s ease', style({ transform: 'translateX(-100%)' }))
            ]),
            transition('tile => tile-list', [
                // style({ 'overflow-x': 'hidden' }),
                query('.tile-list, .tile', [
                    style({ position: 'absolute' })
                ]),
                query('.tile-list', [
                    style({ transform: 'translateX(-100%)' })
                ]),
                animate('.5s ease', style({ transform: 'translateX(100%)' }))
            ]),
            transition('* => *', [
                style({ opacity: 0 }),
                animate('.5s ease-in', style({ opacity: 1 }))
            ])
        ])
    ]
})
export class LayoutComponent extends ComponentBase {
    constructor(
        private router: Router,
        private startSnapshot: ActivatedRoute
    ) {
        super();
    }
    
    routeTypeObservable: Observable<string>;
    
    private uniqueCounter = 0;
    
    ngOnInit() {
        super.ngOnInit();
        
        this.routeTypeObservable = this.router.events.pipe(
            filter(e => e instanceof RoutesRecognized),
            map(e => (<RoutesRecognized>e).state.root),
            startWith(this.startSnapshot.snapshot),
            map(snapshot => {
                while (snapshot.firstChild) snapshot = snapshot.firstChild;
                let data = (snapshot && snapshot.data) || {};
                return data.routeType || `unique${this.uniqueCounter++}`;
            })
        );
    }
}
