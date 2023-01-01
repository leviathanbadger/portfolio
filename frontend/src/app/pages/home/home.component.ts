import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faArrowRight = faArrowRight;

  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faLinkedin = faLinkedin;
}
