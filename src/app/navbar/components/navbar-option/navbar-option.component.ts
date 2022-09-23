import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IAvailableIcons } from "../../../../core/interfaces/icons";
@Component({
  selector: 'app-navbar-option',
  templateUrl: './navbar-option.component.html',
  styleUrls: ['./navbar-option.component.scss']
})
export class NavbarOptionComponent implements OnInit {
  @Input() icon: IAvailableIcons = 'person';
  @Input() title: string = '';
  @Input() active?: boolean;
  rendered?: boolean;
  @ViewChild('customIcon') customIcon?: ElementRef<HTMLObjectElement>;
  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewInit() {
  //   if(this.customIcon?.nativeElement) this.customIcon.nativeElement.data = `assets/icons/${this.icon}.svg`
  //   setTimeout(() => {
  //     this.rendered = true;
  //   },300)
  // }


}
