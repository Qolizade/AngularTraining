import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private elementRef : ElementRef) { 
    
  }

}
