import { NgModule } from "@angular/core";
import { IconComponent } from "./components/icon/icon.component";
import { InputSearchDirective } from './directives/input-search.directive';

@NgModule({
  declarations: [
    IconComponent,
    InputSearchDirective
  ],
  imports: [],
  providers: [],
  exports: [
    IconComponent,
    InputSearchDirective
  ]
})
export class SharedModule { }
