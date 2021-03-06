import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog'; 
import { DialogPopupComponent } from './shared/dialog-popup/dialog-popup.component';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  entryComponents:[DialogPopupComponent]
})
export class MaterialModule { }
