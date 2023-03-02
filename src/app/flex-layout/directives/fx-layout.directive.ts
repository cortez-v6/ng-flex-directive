import { OnInit, Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[fxLayout]'
})
export class FxLayoutDirective implements OnInit {
  @Input() fxLayout: string | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const [direction, wrap] = (this.fxLayout || '').split(' ');
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'flex-direction', direction || 'row');
    this.renderer.setStyle(this.el.nativeElement, 'flex-wrap', wrap || 'nowrap');
  }
}
