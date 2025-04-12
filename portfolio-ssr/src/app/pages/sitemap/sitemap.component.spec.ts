import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { SitemapComponent } from './sitemap.component';

@Component({
    template: ''
})
export class DummyComponent { }

describe('SitemapComponent', () => {
    let component: SitemapComponent;
    let fixture: ComponentFixture<SitemapComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SitemapComponent],
            providers: [
                provideExperimentalZonelessChangeDetection(),
                provideRouter([
                    { path: '', component: DummyComponent }
                ]),
                provideLocationMocks()
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(SitemapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
