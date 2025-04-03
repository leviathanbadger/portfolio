import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { Theme, ThemeProvider } from '../providers';

@Component({
    selector: 'bls-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
    theme: Signal<Theme | undefined>;
    themeSubscription: Subscription | null = null;

    constructor(
        private themeProvider: ThemeProvider,
        @Inject(PLATFORM_ID) private platformId: string,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.theme = toSignal<Theme>(this.themeProvider.theme$);
    }

    ngOnInit(): void {
        this.themeSubscription = this.createThemeSubscription();
    }

    createThemeSubscription(): Subscription | null {
        if (!isPlatformBrowser(this.platformId)) return null;
        if (!this.document) return null;
        const window = this.document.defaultView;
        if (!window) return null;
        const htmlElement = this.document.documentElement;
        return this.themeProvider.theme$.subscribe(theme => htmlElement.setAttribute('data-bs-theme', theme));
    }

    ngOnDestroy(): void {
        this.themeSubscription?.unsubscribe();
        this.themeSubscription = null;
    }
}
