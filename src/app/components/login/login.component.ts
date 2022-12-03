import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _serviceLogin:LoginService){
    
  }

  login(){
    let persona = {
      nombre:'Jhon Guevara',
      correo:'jhonguevara1401@gmail.com'
    }
  }

}
