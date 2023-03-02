import { Directive, Input, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fxFlex]'
})
export class FxFlexDirective implements OnInit, OnDestroy {
  private el: HTMLElement;
  private fxFlexValue = '';
  private originalWidth = '';

  @Input('fxFlex') set fxFlex(val: string) {
    this.fxFlexValue = val || '';
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.el = this.elRef.nativeElement;
  }

  ngOnInit() {
    this.originalWidth = this.el.style.width;
    this.setStyle();
  }

  ngOnDestroy() {
    this.el.style.width = this.originalWidth;
  }

  setStyle() {
    if (this.fxFlexValue === '') {
      this.el.style.flex = '1 1 0%';
    } else if (this.fxFlexValue === 'initial') {
      this.el.style.flex = '0 1 auto';
    } else if (this.fxFlexValue === 'auto') {
      this.el.style.flex = '1 1 auto';
    } else if (this.fxFlexValue === 'none') {
      this.el.style.flex = 'none';
    } else if (this.fxFlexValue.startsWith('grow')) {
      const growValue = this.fxFlexValue.replace('grow', '').trim() || '1';
      this.el.style.flex = `${growValue} 1 0%`;
    } else if (this.fxFlexValue.startsWith('shrink')) {
      const shrinkValue = this.fxFlexValue.replace('shrink', '').trim() || '1';
      this.el.style.flex = `1 ${shrinkValue} 0%`;
    } else if (this.fxFlexValue.startsWith('calc') || this.fxFlexValue.startsWith('0 0 calc')) {
      this.el.style.flex = this.fxFlexValue;
    } else {
      this.el.style.flex = this.fxFlexValue;
    }
  }
}
