import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAvailableIcons } from "../../../core/interfaces/icons";

export interface IContextMenuOption {
  icon: IAvailableIcons;
  label: string;
}

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
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