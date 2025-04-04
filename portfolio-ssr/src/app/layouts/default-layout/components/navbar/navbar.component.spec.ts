import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, RouterOutlet } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideLocationMocks } from '@angular/common/testing';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';

@Component({
    template: ''
})
export class DummyComponent { }

@Component({
    imports: [RouterOutlet, NavbarComponent],
    template: '<bls-navbar></bls-navbar><router-outlet></router-outlet>',
})
export class DummyLayout { }

describe('NavbarComponent', () => {
    let harness: RouterTestingHarness;
    let component: NavbarComponent;
    let nativeElement: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavbarComponent],
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
        const query = harness.fixture.debugElement.query(By.css('bls-navbar'));
        component = query.componentInstance as NavbarComponent;
        nativeElement = query.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(nativeElement).toBeTruthy();
    });

    it('should start collapsed', () => {
        expect(component.isCollapsed()).toBeTrue();
    });

    it('should indicate which page you are on', async () => {
        component.toggleCollapse();
        expect(component.isCollapsed()).toBeFalse();
        await harness.fixture.whenStable();
        expect(nativeElement.querySelector('.navbar-brand')).toHaveClass('active');

        await harness.navigateByUrl('/projects');
        await harness.fixture.whenStable();
        expect(nativeElement.querySelector('.navbar-brand')).not.toHaveClass('active');
        expect(nativeElement.querySelector('.nav-link.active')?.textContent).toContain('Projects');
    });
});
