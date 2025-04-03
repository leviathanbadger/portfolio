import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ThemeProvider } from '../providers';
import { DarkThemeProvider } from '../providers/theme/dark-theme';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [
                provideExperimentalZonelessChangeDetection(),
                { provide: ThemeProvider, useClass: DarkThemeProvider}
            ]
        }).compileComponents();
    });

    it('should create the app', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        await fixture.whenStable();
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have the 'dark' theme`, async () => {
        const fixture = TestBed.createComponent(AppComponent);
        await fixture.whenStable();
        const app = fixture.componentInstance;
        expect(app.theme()).toEqual('dark');
    });

    it('should render theme', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        await fixture.whenStable();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('#theme')?.textContent).toContain('dark');
    });
});
