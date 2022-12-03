import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {


  transform(value: string):string {
     
    function capitalizarNombres(){
      
      console.log(value.split(" "));

    }
    

    return `1-> ${value.toUpperCase()} 2 ->${value.toLowerCase()} 3 --> ${capitalizarNombres()} `;
  }

}
