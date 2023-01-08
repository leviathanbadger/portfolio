import { Component } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger('staggerpopin_sections', [
      transition(':enter', [
        query('.section, .subsection, .certification-tile', [
          style({ 'scale': 0 }),
          stagger('.05s', [
            animate('.4s cubic-bezier(0.175,  0.885, 0.320, 1.275)', style({ 'scale': 1 })),
          ]),
        ])
      ])
    ])
  ]
})
export class ResumeComponent {
  faFilePdf = faFilePdf;
}
