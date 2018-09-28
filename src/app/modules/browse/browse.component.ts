import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(400)
      ]),
      transition('* => void', [
        animate(400, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class BrowseComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
