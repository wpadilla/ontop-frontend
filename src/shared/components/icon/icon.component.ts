import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IAvailableIcons } from "../../../core/interfaces/icons";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit, AfterViewInit {
  @Input() icon: IAvailableIcons = 'person';
  @Input() class?: string;
  rendered?: boolean;
  @ViewChild('customIcon') customIcon?: ElementRef<HTMLObjectElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if(this.customIcon?.nativeElement) this.customIcon.nativeElement.data = `assets/icons/${this.icon}.svg`
    setTimeout(() => {
      this.rendered = true;
    },300)
  }
}
