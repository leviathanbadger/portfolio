import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { provideLocationMocks } from '@angular/common/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, provideRouter, Route, RouterOutlet } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

function createDummyComponent(name: string) {
    @Component({
        selector: `bls-dummy-${name}`,
        imports: [RouterOutlet],
        template: `<div> ${name} <router-outlet/> </div>`,
    })
    class DummyComponent {
        get originalName() {
            return name;
        }
    }

    return DummyComponent;
}

async function createDummyRoutes(routes: Route[]): Promise<Route[]> {
    return await Promise.all(routes.map(async (route) => {
        const newRoute = { ...route };
        if (route.component) {
            newRoute.component = createDummyComponent(route.component.name);
        }
        if (route.loadComponent) {
            newRoute.component = createDummyComponent(((await route.loadComponent()) as any).name);
            delete newRoute.loadComponent;
        }
        if (route.children) {
            newRoute.children = await createDummyRoutes(route.children);
        }
        expect(route.loadChildren).toBeUndefined();
        return newRoute;
    }));
}

describe('routes', () => {
    let dummyRoutes: Route[];
    let harness: RouterTestingHarness;

    beforeEach(async () => {
        dummyRoutes = await createDummyRoutes(routes);

        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [
                provideExperimentalZonelessChangeDetection(),
                provideRouter(dummyRoutes),
                provideLocationMocks()
            ]
        }).compileComponents();

        harness = await RouterTestingHarness.create();
    });

    it('should route to homepage correctly', async () => {
        let component = await harness.navigateByUrl('/');
        await harness.fixture.whenStable();
        expect(component).toBeTruthy();
        expect((component as any).originalName).toEqual('DefaultLayoutComponent');

        component = harness.fixture.debugElement.query(By.css('bls-dummy-homecomponent'));
        expect(component).toBeTruthy();
        expect((component as any).nativeElement?.textContent).toContain('HomeComponent');
    });

    it('should route to /cv correctly', async () => {
        let component = await harness.navigateByUrl('/cv');
        await harness.fixture.whenStable();
        expect(component).toBeTruthy();
        expect((component as any).originalName).toEqual('DefaultLayoutComponent');

        component = harness.fixture.debugElement.query(By.css('bls-dummy-curriculumvitaecomponent'));
        expect(component).toBeTruthy();
        expect((component as any).nativeElement?.textContent).toContain('CurriculumVitaeComponent');
    });

    it('should route to /projects correctly', async () => {
        let component = await harness.navigateByUrl('/projects');
        await harness.fixture.whenStable();
        expect(component).toBeTruthy();
        expect((component as any).originalName).toEqual('DefaultLayoutComponent');

        component = harness.fixture.debugElement.query(By.css('bls-dummy-projectscomponent'));
        expect(component).toBeTruthy();
        expect((component as any).nativeElement?.textContent).toContain('ProjectsComponent');
    });

    it('should route to /art correctly', async () => {
        let component = await harness.navigateByUrl('/art');
        await harness.fixture.whenStable();
        expect(component).toBeTruthy();
        expect((component as any).originalName).toEqual('DefaultLayoutComponent');

        component = harness.fixture.debugElement.query(By.css('bls-dummy-artcomponent'));
        expect(component).toBeTruthy();
        expect((component as any).nativeElement?.textContent).toContain('ArtComponent');
    });

    it('should route to /art/houdini correctly', async () => {
        let component = await harness.navigateByUrl('/art/houdini');
        await harness.fixture.whenStable();
        expect(component).toBeTruthy();
        expect((component as any).originalName).toEqual('DefaultLayoutComponent');

        component = harness.fixture.debugElement.query(By.css('bls-dummy-artcomponent'));
        expect(component).toBeFalsy();

        component = harness.fixture.debugElement.query(By.css('bls-dummy-houdinicomponent'));
        expect(component).toBeTruthy();
        expect((component as any).nativeElement?.textContent).toContain('HoudiniComponent');
    });

    it('should route to /art/houdini/:practiceId correctly', async () => {
        let component = await harness.navigateByUrl('/art/houdini/123');
        await harness.fixture.whenStable();
        expect(component).toBeTruthy();
        expect((component as any).originalName).toEqual('DefaultLayoutComponent');

        component = harness.fixture.debugElement.query(By.css('bls-dummy-artcomponent'));
        expect(component).toBeFalsy();

        component = harness.fixture.debugElement.query(By.css('bls-dummy-houdinicomponent'));
        expect(component).toBeTruthy();
        expect((component as any).nativeElement?.textContent).toContain('HoudiniComponent');

        let activatedRoute: ActivatedRouteSnapshot | null = TestBed.inject(ActivatedRoute).snapshot;
        let params: any = { };
        while (!!activatedRoute) {
            params = { ...params, ...activatedRoute.params };
            activatedRoute = activatedRoute.firstChild;
        }
        expect(params['practiceId']).toEqual('123');
    });

    it('should route to /sitemap correctly', async () => {
        let component = await harness.navigateByUrl('/sitemap');
        await harness.fixture.whenStable();
        expect(component).toBeTruthy();
        expect((component as any).originalName).toEqual('DefaultLayoutComponent');

        component = harness.fixture.debugElement.query(By.css('bls-dummy-sitemapcomponent'));
        expect(component).toBeTruthy();
        expect((component as any).nativeElement?.textContent).toContain('SitemapComponent');
    });

    it('should route to unknown 404 pages correctly', async () => {
        let component = await harness.navigateByUrl('/blah/this/page/does/not/exist');
        await harness.fixture.whenStable();
        expect(component).toBeTruthy();
        expect((component as any).originalName).toEqual('DefaultLayoutComponent');

        component = harness.fixture.debugElement.query(By.css('bls-dummy-notfoundcomponent'));
        expect(component).toBeTruthy();
        expect((component as any).nativeElement?.textContent).toContain('NotFoundComponent');
    });

    const redirectCases: [string, string][] = [
        ['/resume', '/cv'],
        ['/houdini-practice', '/art/houdini'],
        ['/houdini-practice/123', '/art/houdini/123']
    ];
    redirectCases.forEach(([from, to]) => {
        it(`should redirect from ${from} to ${to}`, async () => {
            await harness.navigateByUrl(from);
            await harness.fixture.whenStable();

            const location = TestBed.inject(Location);
            expect(location.path()).toEqual(to);
        });
    });
});
