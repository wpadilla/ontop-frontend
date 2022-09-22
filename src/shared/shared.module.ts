import { NgModule } from "@angular/core";
import { IconComponent } from "./components/icon/icon.component";
import { InputSearchDirective } from './directives/input-search.directive';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    IconComponent,
    InputSearchDirective,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    IconComponent,
    InputSearchDirective,
    ButtonComponent
  ]
})
export class SharedModule { }
