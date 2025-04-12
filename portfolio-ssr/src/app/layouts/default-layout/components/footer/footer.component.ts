import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandGithub, faBrandLinkedin, faBrandStackOverflow } from '@ng-icons/font-awesome/brands';

@Component({
    selector: 'bls-footer',
    imports: [RouterLink, RouterLinkActive, NgIcon],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    viewProviders: [provideIcons({ faBrandGithub, faBrandStackOverflow, faBrandLinkedin })]
})
export class FooterComponent {
    readonly currentYear: number = new Date().getFullYear();
}
