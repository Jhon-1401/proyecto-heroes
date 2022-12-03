import { ChangeDetectionStrategy, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oculatarMostra'
})
export class OculatarMostraPipe implements PipeTransform {

  transform(value: string,ocultar:boolean) {
 
    if(ocultar==false){

      return value;
    }
    else{
      
      let enmascara:string="";

      for (let i = 0; i < value.length; i++) {
        
        enmascara="*"+enmascara;
        
      }
      return enmascara;
      
    }
    
  }

}
