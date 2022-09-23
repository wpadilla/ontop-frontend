import { Component, Input, OnInit } from '@angular/core';
import { IContractor } from "../../../app/app.component";

@Component({
  selector: 'app-contractor-item',
  templateUrl: './contractor-item.component.html',
  styleUrls: ['./contractor-item.component.scss']
})
export class ContractorItemComponent implements OnInit {

  @Input() contractor: IContractor = {} as IContractor;
  constructor() { }

  ngOnInit(): void {
  }

}
