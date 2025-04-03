import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, NEVER, fromEvent, map, shareReplay, startWith, distinctUntilChanged } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable()
export class ThemeProvider {
    #theme$: Observable<Theme>;

    constructor(
        @Inject(PLATFORM_ID) private platformId: string,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.#theme$ = this.createTheme$();
    }

    protected createTheme$(): Observable<Theme> {
        if (!isPlatformBrowser(this.platformId) || !this.document || !this.document.defaultView) {
            return NEVER;
        }

        const window = this.document.defaultView;
        if (!window.matchMedia) {
            return NEVER;
        }

        const media = window.matchMedia('(prefers-color-scheme: dark)');
        return fromEvent<MediaQueryListEvent>(media, 'change').pipe(
            map(e => (e.matches ? 'dark' : 'light') as Theme),
            startWith((media.matches ? 'dark' : 'light') as Theme),
            distinctUntilChanged(),
            shareReplay(1)
        );
    }

    get theme$() {
        return this.#theme$;
    }
}
