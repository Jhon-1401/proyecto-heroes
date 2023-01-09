import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localEs from "@angular/common/locales/es"
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//archivo rutas
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartir/navbar/navbar.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { LoginComponent } from './components/login/login.component';

//pipes
import { MayusculaPipe } from './pipe/mayuscula.pipe';
import { CapitalizarPipe } from './pipe/capitalizar.pipe';
import { OculatarMostraPipe } from './pipe/oculatar-mostra.pipe';
import { HeroesComponent } from './components/actividadheroes/heroes/heroes.component';
import { MostrarImagenPipe } from './pipe/mostrar-imagen.pipe';


registerLocaleData(localEs,'es')

@NgModule({
  //Declarados todos los componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    TablaComponent,
    MayusculaPipe,
    CapitalizarPipe,
    OculatarMostraPipe,
    LoginComponent,
    HeroesComponent,
    MostrarImagenPipe,
    
   
  ],
  imports: [
    //Todas la librerias que utilicemos  
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  //Servicios-relacionados con el backend 
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  //Cual es el componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
