import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoudiniComponent } from './houdini.component';

describe('HoudiniComponent', () => {
    let component: HoudiniComponent;
    let fixture: ComponentFixture<HoudiniComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HoudiniComponent],
            providers: [provideExperimentalZonelessChangeDetection()]
        }).compileComponents();

        fixture = TestBed.createComponent(HoudiniComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
