import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoudiniPracticeComponent } from './houdini-practice.component';

describe('HoudiniPracticeComponent', () => {
    let component: HoudiniPracticeComponent;
    let fixture: ComponentFixture<HoudiniPracticeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HoudiniPracticeComponent],
            providers: [provideExperimentalZonelessChangeDetection()]
        }).compileComponents();

        fixture = TestBed.createComponent(HoudiniPracticeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
