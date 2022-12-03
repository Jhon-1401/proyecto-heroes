import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Promesas -> Observables 
  //Promesas resolve -then
  //observables respuestas - suscripción
  personas$:Subject<any>;

  constructor() {
    this.personas$ = new Subject<any>;
   }

   getPersona():Observable<any>{
    return this.personas$.asObservable();
   }

   login(persona:any){
    this.personas$.next(persona);
   }

}
