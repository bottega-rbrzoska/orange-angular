import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlightSecondClass;
  @Input() appHighlight;
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  @HostListener('mouseover')
  handleMouseover() {
    if(this.appHighlight) {
      this.renderer.addClass(this.el.nativeElement, this.appHighlight)
    }
  }
  @HostListener('mouseout')
  handleMouseout() {
    if(this.appHighlight) {
      this.renderer.removeClass(this.el.nativeElement, this.appHighlight)
    }

  }

}
