import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CreateSessionGuard } from './guards/create-session.guard';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'browse'
  },
  {
    path: 'browse',
    loadChildren: './modules/browse/browse.module#BrowseModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule',
    canActivate: [ CreateSessionGuard ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule, TranslatePipe],
  providers: [AuthService, TranslateModule]
})
export class AppRoutingModule { }