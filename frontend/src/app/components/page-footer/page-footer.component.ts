import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'bls-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent {
  currentYear$!: Observable<number>;

  ngOnInit() {
    this.currentYear$ = of(new Date().getFullYear());
  }
}
