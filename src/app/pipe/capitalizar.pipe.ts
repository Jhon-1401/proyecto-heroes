import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {


  transform(value: string):string {
     
      let splitPalabra = value.split(' ');
      let inicialMayuscula = splitPalabra.map(palabra=>{
        return palabra[0].toUpperCase() + palabra.toLowerCase().slice(1);
      });
      let nombresCapitalizados = inicialMayuscula.join(" ");
      console.log(nombresCapitalizados);
     
    return `1-> ${value.toUpperCase()} 2 ->${value.toLowerCase()} 3 --> ${nombresCapitalizados}  ` ;
  }

}
