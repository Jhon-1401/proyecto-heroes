import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarImagen'
})
export class MostrarImagenPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
