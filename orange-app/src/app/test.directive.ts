import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {


  @Input() appTest = 'red';
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'd-block')
  }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background', this.appTest)
  }

  @HostListener('mouseover')
  handleClick() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'blue')

  }
}
