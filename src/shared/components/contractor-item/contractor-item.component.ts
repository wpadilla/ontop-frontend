import { Component, Input, OnInit } from '@angular/core';
import { IContractor } from "../../../app/app.component";
import { IContextMenuOption } from "../context-menu/context-menu.component";

@Component({
  selector: 'app-contractor-item',
  templateUrl: './contractor-item.component.html',
  styleUrls: ['./contractor-item.component.scss']
})
export class ContractorItemComponent implements OnInit {
  openContextMenu = false;

  contractorActions: IContextMenuOption[] = [
    {
      label: 'Edit',
      icon: 'edit',
    },
    {
      label: 'Sign',
      icon: 'sign',
    },
    {
      label: 'View summary',
      icon: 'document',
    },
    {
      label: 'Delete',
      icon: 'trash',
    }
  ];

  @Input() contractor: IContractor = {} as IContractor;
  constructor() { }

  ngOnInit(): void {
  }

  toggleContextMenu = ($event: MouseEvent) => {
    $event.stopPropagation()
    this.openContextMenu = !this.openContextMenu
  };

}
