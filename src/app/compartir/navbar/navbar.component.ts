import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { IPersona } from 'src/app/interfaces/persona';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  persona:IPersona= {} as IPersona;  

  constructor(private _serviceLogin : LoginService){
    _serviceLogin.getPersona$().subscribe((data:IPersona) =>{
      this.persona=data;
      
    });
  }

}
