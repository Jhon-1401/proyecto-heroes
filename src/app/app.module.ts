import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartir/navbar/navbar.component';
import { TablaComponent } from './component/tabla/tabla.component';
import { MayusculaPipe } from './pipe/mayuscula.pipe';
import { EjercicioPipeComponent } from './componet/ejercicio-pipe/ejercicio-pipe.component';
import { CapitalizarPipe } from './pipe/capitalizar.pipe';
import { OculatarMostraPipe } from './pipe/oculatar-mostra.pipe';

@NgModule({
  //Declarados todos los componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    TablaComponent,
    MayusculaPipe,
    EjercicioPipeComponent,
    CapitalizarPipe,
    OculatarMostraPipe,
  ],
  imports: [
    //Todas la librerias que utilicemos  
    BrowserModule,
    AppRoutingModule
  ],
  //Servicios-relacionados con el backend 
  providers: [],
  //Cual es el componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
