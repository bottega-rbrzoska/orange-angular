import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest]',
  exportAs: 'appTest'
})
export class TestDirective implements OnInit {

  @Input() appTest = {hoverColor: 'red', regularColor: 'white'};
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'd-block')
  }

  ngOnInit() {
    this.changeBackground('white')
  }

  @HostListener('mouseover')
  handleM() {
    this.changeBackground(this.appTest.hoverColor)

  }
  @HostListener('mouseout')
  handleMouseout() {
    this.changeBackground(this.appTest.regularColor)

  }

  changeBackground(bgColor: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background',  bgColor)
  }
}
