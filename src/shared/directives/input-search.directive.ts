import { Directive, ElementRef, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[inputSearch]'
})
export class InputSearchDirective implements OnInit{

  constructor(
    private element: ElementRef<HTMLDivElement>,
  ) {

  }

  ngOnInit() {
    let css = `
      padding: 10px;
      border: 1px solid #7a7a7a;
      border-radius: 5px;
      width: 100%;
      font-size: 18px;
      padding-left: 40px;
    `;

    this.element.nativeElement.setAttribute('style', css);
  }
}
