import { Component, OnDestroy, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, AbstractControl, Validators} from '@angular/forms' ;
import{IRestContries}from 'src/app/interfaces/rest-countries.interface';
import { PaisService } from 'src/app/services/pais.service';


@Component({
  selector: 'app-formulario-reactivos',
  templateUrl: './formulario-reactivos.component.html',
  styleUrls: ['./formulario-reactivos.component.css']
})
export class FormularioReactivosComponent implements OnInit,OnDestroy {

  formGroup: FormGroup = new FormGroup({});
  paises:IRestContries[] | null = [];

  constructor(
    private formBuilder:FormBuilder,
    private  _servicePais:PaisService
    ){
    
  }

  ngOnInit():void{
    console.log('componente init')
    this.buildForm();
    this.getPaises();
  }

  getPaises(){
    this._servicePais.getPaises().subscribe((data:IRestContries[] | null) =>{
      this.paises = data ;
    });
  }

  ngOnDestroy():void{

    console.log('componente Destruido');
  }

  buildForm(){
    this.formGroup = this.formBuilder.group({
      nombre:['', Validators.required],
      apellido:['', [Validators.required, Validators.minLength(5)]],
      paises: [-1, Validators.required],
      correo:['',Validators.pattern('[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$')],
      contrasena:['',[Validators.required,this.validarContraseña]]
    });
  }

  validarContraseña(control:AbstractControl){
    const contrasena = control.value;
    let error = null;
    if(!contrasena.includes('$')){
      error = {pesos: 'Es requerido el signo $'}
    }
    if(!parseFloat(contrasena[0])){
      error = {...error,number:'y empezar con un numero'}
    }
    return error;
  }

  usuarioNoValido(){
    return this.nombre?.invalid && this.nombre.touched;
  }

  gerError(controlName:string){
    let error='';
    const control = this.formGroup.get(controlName);
    if(control?.touched && control?.errors != null){
      error =JSON.stringify(control?.errors)
    }
    return error;
  }

  guardar(){

    console.log(this.formGroup);

  }

  get nombre():AbstractControl | null {return this.formGroup.get('nombre')}
  get apellido():AbstractControl | null {return this.formGroup.get('apellido')}
  get contrasena():AbstractControl | null {return this.formGroup.get('contrasena')}

}
