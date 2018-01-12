import { Directive, ViewContainerRef, TemplateRef, EmbeddedViewRef, Input } from '@angular/core';

@Directive({
    selector: '[ngLet]'
})
export class NgLet {
    constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<NgLetContext>) {
        this._context = new NgLetContext();
    }
    
    private _context: NgLetContext;
    private _viewRef: EmbeddedViewRef<NgLetContext>;
    
    @Input()
    set ngLet(val: any) {
        this._context.$implicit = this._context.ngLet = val;
        this.updateView();
    }
    
    private updateView() {
        if (!this._viewRef && this._templateRef) {
            this._viewContainer.clear();
            this._viewRef = this._viewContainer.createEmbeddedView(this._templateRef, this._context);
        }
    }
}

export class NgLetContext {
    public $implicit: any = null;
    public ngLet: any = null;
}
