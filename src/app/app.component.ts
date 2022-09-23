import { Component } from '@angular/core';
import { fadeAnimation, verticalSlideAnimation } from "../shared/animations/common.animations";

export interface IContractor {
  profileImg: string;
  name: string;
  type: 'Traditional';
  startDate: Date;
  amount: number;
  status: 'Active' | 'Signature pending';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    verticalSlideAnimation,
    fadeAnimation,
  ]
})
export class AppComponent {
  title = 'ontop-frontend';

  contractsColumns = ['Contractor name', 'Type', 'Start date', 'Amount', 'Status', 'Actions'];
  contractors: IContractor[] = [
    {
      profileImg: 'assets/images/user1.png',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: new Date(),
      amount: 200,
      status: 'Active',
    },
    {
      profileImg: 'assets/images/user2.png',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: new Date(),
      amount: 200,
      status: 'Active',
    },
    {
      profileImg: 'assets/images/user3.png',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: new Date(),
      amount: 200,
      status: 'Signature pending',
    }
  ]
}
