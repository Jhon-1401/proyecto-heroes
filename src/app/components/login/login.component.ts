import { Component } from '@angular/core';
import { IPersona } from 'src/app/interfaces/persona';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  count:number=0;
  constructor(private _serviceLogin:LoginService){

  }

  login(){
    let persona:IPersona={
      nombre: 'Jhon Guevara',
      correo: 'jhonguevara1401@gmail.com',
      count: this.count
    }
    this.count++;
    this._serviceLogin.login(persona);
  }

}
