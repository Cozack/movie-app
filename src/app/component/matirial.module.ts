import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { WishListComponent } from './wish-list/wish-list.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  imports: [
    MatCommonModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    CommonModule,
    AppRoutingModule,
  ],
    exports: [
        MatCommonModule,
        MatMenuModule,
        MatSidenavModule,
        MatTabsModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatGridListModule,
      MatCheckboxModule,
    ],
  providers: [],
  declarations: [

    WishListComponent
  ]
})
export class MatirialModule {}
