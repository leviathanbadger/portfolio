import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'bls-navbar',
    imports: [RouterLink, RouterLinkActive, NgbCollapse],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    isCollapsed = signal(true);

    collapse() {
        this.isCollapsed.set(false);
    }
    toggleCollapse() {
        this.isCollapsed.set(!this.isCollapsed());
    }
}
