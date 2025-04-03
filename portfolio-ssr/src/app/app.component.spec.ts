import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [provideExperimentalZonelessChangeDetection()]
        }).compileComponents();
    });

    it('should create the app', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        await fixture.whenStable();
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have the 'bls-portfolio' title`, async () => {
        const fixture = TestBed.createComponent(AppComponent);
        await fixture.whenStable();
        const app = fixture.componentInstance;
        expect(app.title).toEqual('bls-portfolio');
    });

    it('should render title', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        await fixture.whenStable();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Hello, bls-portfolio');
    });
});
