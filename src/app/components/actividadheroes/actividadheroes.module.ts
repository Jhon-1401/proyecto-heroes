import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { ActividadheroesRoutingModule } from './actividadheroes-routing.module';
import {BuscadorHeroesComponent} from './buscador-heroes/buscador-heroes.component';
import {HeroeComponent} from './heroe/heroe.component';
import {HeroeTarjetaComponent} from './heroe-tarjeta/heroe-tarjeta.component';


import {ImageCropperModule} from 'ngx-image-cropper';


@NgModule({
  declarations: [
    BuscadorHeroesComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    
  ],
  imports: [
    CommonModule,
    ActividadheroesRoutingModule,
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule

    
  ]
  
})
export class ActividadheroesModule { }
