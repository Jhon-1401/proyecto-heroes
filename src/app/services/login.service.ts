import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; //libreria muy Importante Estudiarla
import { IPersona } from '../interfaces/persona';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Promesas -> Observables 
  //Promesas resolve -then
  //observables respuestas - suscripción
  personas$:Subject<any>;//para los observables siempre colocar el signo peso  

  constructor() {
    this.personas$ = new Subject<IPersona>;
   }

   getPersona$():Observable<IPersona>{
    return this.personas$.asObservable();
   }

   login(persona:IPersona){
    this.personas$.next(persona);
   }

}
