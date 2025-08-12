import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, public CartService: CartService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.logIn();
  }

  logout(): void {
    this.authService.logOut();
  }
}
