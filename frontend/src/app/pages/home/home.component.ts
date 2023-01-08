import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('blowup', [
      transition(':enter', [
        style({ 'scale': 0 }),
        animate('.4s cubic-bezier(0.175,  0.885, 0.320, 1.275)', style({ 'scale': 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  faArrowRight = faArrowRight;

  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faLinkedin = faLinkedin;
}
