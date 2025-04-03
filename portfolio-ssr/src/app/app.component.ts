import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { Theme, ThemeProvider } from '../providers';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    theme: Signal<Theme | undefined>;

    constructor(
        private themeProvider: ThemeProvider
    ) {
        this.theme = toSignal<Theme>(this.themeProvider.theme$);
    }
}
