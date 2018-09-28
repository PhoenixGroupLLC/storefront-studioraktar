import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

import { 
  MatInputModule, 
  MatButtonModule, 
  MatFormFieldModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { i18nChild } from 'src/app/app-i18n.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    i18nChild,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
