import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
    selector: 'input[autofocus],textarea[autofocus],button[autofocus],[tabindex][autofocus]'
})
export class AutofocusDirective {
    constructor(private el: ElementRef) { }
    
    private _autofocus: boolean = true;
    @Input() 
    set autofocus(val: string | boolean) {
        if (typeof val === 'string') val = (['', 'autofocus', 'true'].indexOf(val) !== -1);
        this._autofocus = val;
    }
    get autofocus(): string | boolean {
        return this._autofocus;
    }
    
    @Input() autofocusDelay: number = 0;
    
    private isVisible: boolean = false;
    private autofocusTimeout: any = null;
    ngAfterViewInit() {
        if (this.autofocusDelay > 0) {
            this.autofocusTimeout = setTimeout(() => this.activateAutofocus(), this.autofocusDelay);
        }
        else this.activateAutofocus();
    }
    private activateAutofocus() {
        if (!this._autofocus) return;
        this.autofocusTimeout = null;
        let input = <HTMLInputElement>this.el.nativeElement;
        if (this.isVisible === false && input.offsetParent !== null) {
            this.isVisible = true;
            input.focus();
        }
        else if (this.isVisible === true && input.offsetParent === null) {
            this.isVisible = false;
        }
    }
    
    ngOnDestroy() {
        if (this.autofocusTimeout) {
            clearTimeout(this.autofocusTimeout);
            this.autofocusTimeout = null;
        }
    }
}
