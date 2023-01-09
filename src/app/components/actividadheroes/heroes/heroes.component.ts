import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators,AbstractControl} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { IHeroe } from '../interfaces/interface-heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup = new FormGroup({});
  heroe: IHeroe = {} as IHeroe; 
  
  public previsualizacion:string ="";
  public archivos:any=[];

constructor(
  private formBuilder:FormBuilder,
  private sanitizer: DomSanitizer
  ){

  }

ngOnInit():void{
  console.log('componente heroes inicializado');
  this.buildForm();
}

ngOnDestroy(): void {
  console.log('componente heroes destruido');
}

buildForm(){
  this.formGroup = this.formBuilder.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    descripcion:['',[Validators.required,Validators.minLength(10)]],
    poder:['',[Validators.required,Validators.minLength(3)]],
    casa:[-1,Validators.required],
    image:['',Validators.required]

  });
}


cargaImagen(event: any){
  const archivoCapturado=event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen:any) =>{
    this.previsualizacion = imagen.base;
    console.log(imagen);
  });
  this.archivos.push(archivoCapturado);

  console.log(event.target.files);

}




  
  
 // si funciona

  extraerBase64 = async ($event:any) => new Promise((resolve)=>
  { try{const unsafeImg = window.URL.createObjectURL($event);
       const image =this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
       const reader = new FileReader();
       reader.readAsDataURL($event);
       reader.onload=() => {resolve({base: reader.result,})  ;};
         reader.onerror=error => {
          resolve({
            base:null
          });};
         return reader   }
    catch(e){return null;}
  })
  

  
  getError(controlName: string){
    let error = '';
    const control = this.formGroup.get(controlName);
    if(control?.touched && control?.errors != null ){
      error = JSON.stringify(control?.errors)
    }
    return error;
  }

  guardar(){
    console.log(this.formGroup);
    
  }

  

  get nombre(): AbstractControl | null { return this.formGroup.get('nombre') };
  get descripcion(): AbstractControl | null { return this.formGroup.get('descripcion') };
  get poder():AbstractControl | null {return this.formGroup.get('poder')}
  get casa():AbstractControl | null {return this.formGroup.get('casa')}
  get image():AbstractControl | null {return this.formGroup.get('image')}




}


