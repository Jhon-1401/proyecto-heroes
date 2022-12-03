import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private _serviceLogin : LoginService){
    //_serviceLogin.getPersona$().subscribe
  }

}
