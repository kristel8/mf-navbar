import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  DateAdapter,
  MatNativeDateModule,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { APP_DATE_FORMATS, CustomDateAdapter } from '../date.adapter';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSortModule,
    MatChipsModule,
    MatExpansionModule,
    MatMenuModule,
    MatBadgeModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule

  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSortModule,
    MatChipsModule,
    MatExpansionModule,
    MatMenuModule,
    MatBadgeModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: DateAdapter, useClass: CustomDateAdapter },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class MaterialModule {}
