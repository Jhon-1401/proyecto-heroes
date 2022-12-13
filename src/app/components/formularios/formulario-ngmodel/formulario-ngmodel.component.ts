import { Component } from '@angular/core';
import { IPersona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent {

  persona:IPersona = {} as IPersona;

  constructor(){

  }
  guardar(){
   console.log(this.persona) 
  }

}
