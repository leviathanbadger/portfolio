import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'bls-default-layout',
    imports: [RouterOutlet, NavbarComponent],
    templateUrl: './default-layout.component.html',
    styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent { }
