import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import User from '../models/user.model';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  public user?: any;
  private authSubscription?: Subscription;

  constructor(public authService: AuthService) {
    this.user = authService.user;

   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

}
