import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') speed: number = 0;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = 'yellow';
    // (this.el.nativeElement as HTMLElement).style.transition = 'all 2s';
    (this.el.nativeElement as HTMLElement).style.transition = 'all ' + this.speed + 's';
  }

  @HostListener('mouseleave') onMouseLeave() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = 'transparent'
  }
  
}
