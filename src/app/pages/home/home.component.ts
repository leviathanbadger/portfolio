import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

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
