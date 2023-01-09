import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BuscadorHeroesComponent} from './buscador-heroes/buscador-heroes.component';
import {HeroeComponent} from './heroe/heroe.component';
import {HeroeTarjetaComponent} from './heroe-tarjeta/heroe-tarjeta.component';

const routes: Routes = [
{
  path:'',
  children:[
    {path:'buscadorH',component:BuscadorHeroesComponent},
    {path:'heroe',component:HeroeComponent},
    {path:'tarjetahero',component:HeroeTarjetaComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadheroesRoutingModule { }
