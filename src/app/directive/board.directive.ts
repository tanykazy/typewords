import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBoard]'
})
export class BoardDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
