import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material.module";
import { DialogPopupComponent } from "./dialog-popup/dialog-popup.component";
import { DropdownDirective } from "./dropdown.directive";
import { FilterPipe } from "./filter.pipe";
import { UppercaseDirective } from "./uppercase.directive";

@NgModule({
  declarations: [
    DialogPopupComponent,
    DropdownDirective,
    FilterPipe,
    UppercaseDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DialogPopupComponent,
    DropdownDirective,
    FilterPipe,
    UppercaseDirective,
    CommonModule,
    MaterialModule
  ]
})

export class SharedModule{}