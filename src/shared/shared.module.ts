import { NgModule } from "@angular/core";
import { IconComponent } from "./components/icon/icon.component";
import { InputSearchDirective } from './directives/input-search.directive';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from "@angular/common";
import { InputDirective } from "./directives/input.directive";
import { TableComponent } from './components/table/table.component';
import { ContractorItemComponent } from './components/contractor-item/contractor-item.component';
import { BadgeComponent } from './components/badge/badge.component';

@NgModule({
  declarations: [
    IconComponent,
    InputSearchDirective,
    InputDirective,
    ButtonComponent,
    TableComponent,
    ContractorItemComponent,
    BadgeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    IconComponent,
    InputSearchDirective,
    InputDirective,
    ButtonComponent,
    TableComponent,
    ContractorItemComponent
  ]
})
export class SharedModule { }
