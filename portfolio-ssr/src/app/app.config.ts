import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';
import { ThemeProvider } from '../providers';

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        { provide: ThemeProvider, useClass: ThemeProvider }
    ]
};
