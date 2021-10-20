import { Component } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRoute } from '@angular/router';
import { trigger, transition, query, style, animate } from '@angular/animations';
import { Observable } from 'rxjs';
import { map, filter, startWith } from 'rxjs/operators';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
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
        animate('.2s ease', style({ transform: 'translateX(-100%)' }))
      ]),
      transition('tile => tile-list', [
        // style({ 'overflow-x': 'hidden' }),
        query('.tile-list, .tile', [
          style({ position: 'absolute' })
        ]),
        query('.tile-list', [
          style({ transform: 'translateX(-100%)' })
        ]),
        animate('.2s ease', style({ transform: 'translateX(100%)' }))
      ]),
      transition('* => *', [
        style({ opacity: 0 }),
        animate('.2s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class LayoutComponent {
  constructor(
    private router: Router,
    private startSnapshot: ActivatedRoute
  ) { }

  routeType$!: Observable<string>;

  private uniqueCounter = 0;

  ngOnInit() {
    this.routeType$ = this.router.events.pipe(
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
