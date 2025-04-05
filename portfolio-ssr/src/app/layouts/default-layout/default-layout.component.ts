import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'bls-default-layout',
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    templateUrl: './default-layout.component.html',
    styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent { }
