import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAvailableIcons } from "../../../core/interfaces/icons";
import { verticalSlideAnimation } from "../../animations/common.animations";

export interface IContextMenuOption {
  icon: IAvailableIcons;
  label: string;
}

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  animations: [
    verticalSlideAnimation
  ]
})

export class ContextMenuComponent implements OnInit {
  @Input() options: IContextMenuOption[] = [];
  @Input() open?: boolean;
  @Output() onHide: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
