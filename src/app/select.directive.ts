import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  constructor(private ell:ElementRef) { }
  @HostListener('click') click(){
     this.ell.nativeElement.classList.toggle("select") ;
  }
}
