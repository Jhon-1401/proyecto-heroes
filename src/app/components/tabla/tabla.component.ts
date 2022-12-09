import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  nombre:string="JHON david GuEvArA tOlOzA";
  valorPi:number=Math.PI;
  porcentaje:number=0.236;
  salario:number=1234.5;
  fecha:Date = new Date();
  ocultar:boolean=false;

  generarAlerta(){
    alert('Hola!!!')
  }

  oculataMostrar(){
    if(this.ocultar==false){
      this.ocultar=true
    }
    else{
      this.ocultar=false;
    }

    return this.ocultar;
  }
  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve('llegó la información')
    },5000);

  });

}
