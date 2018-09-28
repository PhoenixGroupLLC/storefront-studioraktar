import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse.component';
import { BrowseRoutingModule } from './browse-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { UnitsModule } from '../units/units.module';
import { HomeModule } from '../home/home.module';
import { i18nChild } from 'src/app/app-i18n.module';

@NgModule({
  imports: [
    CommonModule,
    i18nChild,
    BrowseRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    HomeModule,
    UnitsModule
  ],
  declarations: [
    BrowseComponent
  ]
})
export class BrowseModule { }
