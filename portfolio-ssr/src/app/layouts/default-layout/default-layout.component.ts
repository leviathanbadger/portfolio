import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-default-layout',
    imports: [RouterOutlet],
    templateUrl: './default-layout.component.html',
    styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent { }
