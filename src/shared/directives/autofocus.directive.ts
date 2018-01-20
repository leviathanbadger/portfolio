import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
    selector: 'input[autofocus],textarea[autofocus],button[autofocus]'
})
export class AutofocusDirective {
    constructor(private el: ElementRef) { }
    
    private _autofocus: boolean = true;
    @Input() 
    set autofocus(val: string) {
        this._autofocus = val == '' || val == 'autofocus' || val == 'true';
    }
    get autofocus(): string {
        return this._autofocus ? 'autofocus' : 'false';
    }
    
    private isVisible: boolean = false;
    ngAfterContentChecked() {
        if (!this._autofocus) return;
        let input = <HTMLInputElement>this.el.nativeElement;
        if (this.isVisible === false && input.offsetParent !== null) {
            this.isVisible = true;
            input.focus();
        }
        else if (this.isVisible === true && input.offsetParent === null) {
            this.isVisible = false;
        }
    }
}
