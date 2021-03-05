import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;

  constructor( public auth0: AuthService ) { }

  ngOnInit(): void {
    this.auth0.isAuthenticated$.subscribe( value => this.isLogged = value )
  }

  

}
