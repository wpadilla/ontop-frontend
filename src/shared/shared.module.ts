import { NgModule } from "@angular/core";
import { IconComponent } from "./components/icon/icon.component";
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from "@angular/common";
import { InputDirective } from "./directives/input.directive";
import { TableComponent } from './components/table/table.component';
import { ContractorItemComponent } from './components/contractor-item/contractor-item.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ClickOutsideDirective } from "./directives/click-outside.directive";
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    IconComponent,
    ClickOutsideDirective,
    InputDirective,
    ButtonComponent,
    TableComponent,
    ContractorItemComponent,
    BadgeComponent,
    ContextMenuComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    IconComponent,
    ClickOutsideDirective,
    InputDirective,
    ButtonComponent,
    TableComponent,
    ContractorItemComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
