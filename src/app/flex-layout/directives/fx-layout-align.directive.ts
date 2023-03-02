import { OnInit, Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[fxLayoutAlign]'
})
export class FxLayoutAlignDirective implements OnInit {
  @Input() fxLayoutAlign: string | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const [mainAxis, crossAxis] = (this.fxLayoutAlign || '').split(' ');
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', mainAxis || 'flex-start');
    this.renderer.setStyle(this.el.nativeElement, 'align-items', crossAxis || 'stretch');
  }
}
