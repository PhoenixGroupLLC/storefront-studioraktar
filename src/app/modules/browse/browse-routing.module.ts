import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { UnitsComponent } from '../units/units.component';

export const routes: Routes = [
  {
    path: '',
    component: BrowseComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'units',
        component: UnitsComponent
      },
      {
        path: '',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BrowseRoutingModule { }
