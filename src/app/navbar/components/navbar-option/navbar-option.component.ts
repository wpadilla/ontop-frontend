import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IAvailableIcons } from "../../../../core/interfaces/icons";
import {
  fadeAnimation,
} from "../../../../shared/animations/common.animations";
@Component({
  selector: 'app-navbar-option',
  templateUrl: './navbar-option.component.html',
  styleUrls: ['./navbar-option.component.scss'],
  animations: [
    fadeAnimation,
  ]
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

}
