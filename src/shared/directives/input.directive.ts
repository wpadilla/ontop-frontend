import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective implements OnInit{

  constructor(
    private element: ElementRef<HTMLDivElement>,
  ) {

  }

  ngOnInit() {
    let css = `
      background: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      color: #7a7a7a;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
      height: 40px;
    `;

    this.element.nativeElement.setAttribute('style', css);

  }
}
