import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsComponent } from './units.component';

import { i18nChild } from 'src/app/app-i18n.module';
import { 
  MatInputModule, 
  MatButtonModule, 
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatExpansionModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    i18nChild,
    MatInputModule,
    MatButtonModule, 
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatExpansionModule
  ],
  declarations: [UnitsComponent]
})
export class UnitsModule {

}
