import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  nombre:string="David Toloza";
  valorPi:number=Math.PI;
  porcentaje:number=0.236;
  salario:number=1234.5;
  fecha:Date = new Date();
  


}
