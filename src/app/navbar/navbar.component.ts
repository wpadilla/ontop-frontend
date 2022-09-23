import { Component, OnInit } from '@angular/core';
import { IAvailableIcons } from "../../core/interfaces/icons";
export interface NavOption {
  title: string;
  icon: IAvailableIcons;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  selectedOptionTitle = "Contracts";
  navOptions: NavOption[] = [
    {
      title: "Contracts",
      icon: "person",
    },
    {
      title: "Documents",
      icon: "document",
    },
    {
      title: "Payout",
      icon: "card",
    },
    {
      title: "Time",
      icon: "calendar",
    },
  ];

  ngOnInit(): void {
  }

}
