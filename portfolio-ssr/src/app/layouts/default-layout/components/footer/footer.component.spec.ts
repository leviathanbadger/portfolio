import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterOutlet } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideLocationMocks } from '@angular/common/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

@Component({
    template: ''
})
export class DummyComponent { }

@Component({
    imports: [RouterOutlet, FooterComponent],
    template: '<router-outlet></router-outlet><bls-footer />',
})
export class DummyLayout { }

describe('FooterComponent', () => {
    let harness: RouterTestingHarness;
    let component: FooterComponent;
    let nativeElement: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FooterComponent],
            providers: [
                provideExperimentalZonelessChangeDetection(),
                provideRouter([
                    { path: '', component: DummyLayout, children: [
                        { path: '', pathMatch: 'full', component: DummyComponent },
                        { path: 'projects', component: DummyComponent }
                    ] }
                ]),
                provideLocationMocks()
            ]
        }).compileComponents();

        harness = await RouterTestingHarness.create('/');
        await harness.fixture.whenStable();
        const query = harness.fixture.debugElement.query(By.css('bls-footer'));
        component = query.componentInstance as FooterComponent;
        nativeElement = query.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(nativeElement).toBeTruthy();
    });

    it('should indicate which page you are on', async () => {
        expect(nativeElement.querySelector('.nav-link.active')?.textContent).toContain('Home');

        await harness.navigateByUrl('/projects');
        await harness.fixture.whenStable();
        expect(nativeElement.querySelector('.navbar-brand')).not.toHaveClass('active');
        expect(nativeElement.querySelector('.nav-link.active')?.textContent).toContain('Projects');
    });
});
