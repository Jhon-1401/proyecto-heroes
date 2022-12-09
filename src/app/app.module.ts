import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartir/navbar/navbar.component';
import { TablaComponent } from './components/tabla/tabla.component';

import localEs from "@angular/common/locales/es"
import { MayusculaPipe } from './pipe/mayuscula.pipe';
import { CapitalizarPipe } from './pipe/capitalizar.pipe';
import { OculatarMostraPipe } from './pipe/oculatar-mostra.pipe';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
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
  ],
  imports: [
    //Todas la librerias que utilicemos  
    BrowserModule,
    AppRoutingModule,
    RouterModule 
  ],
  //Servicios-relacionados con el backend 
  providers: [
    
  ],
  //Cual es el componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
