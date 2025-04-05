import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'bls-footer',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    readonly currentYear: number = new Date().getFullYear();
}
