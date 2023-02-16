import { OnInit, Directive, ElementRef, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[fxLayoutGap]'
})
export class FxLayoutGapDirective implements OnInit {
  private layout: string | undefined;
  private gap: string | undefined;

  @Input('fxLayoutGap') set fxLayoutGap(val: string) {
    const values = val.split(' ');
    this.gap = values[0] || '0';
  }

  @Input('fxLayout') set direction(val: string) {
    const values = val.split(' ');
    this.layout = values[0] || 'row';
  }

  @HostBinding('style.display') display = 'flex';

  @HostListener('window:resize') onResize() {
    this.setStyle();
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setStyle();
  }

  setStyle() {
    const childNodes = this.el.nativeElement.childNodes;

    for (let i = 0; i < childNodes.length - 1; i++) {
      const childNode = childNodes[i];
      if (childNode.nodeType === Node.ELEMENT_NODE) {
        if (this.layout === 'row') {
          childNode.style.marginRight = this.gap;
        } else if (this.layout === 'column') {
          childNode.style.marginBottom = this.gap;
        }
      }
    }
  }
}
