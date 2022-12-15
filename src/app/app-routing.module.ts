import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'pipes',component:TablaComponent},
  {
    path: 'form', //para llamar formularios hijos
    loadChildren: () => import('./components/formularios/formularios.module').then(m => m.FormulariosModule)
  },
  {path:'',pathMatch:'full',redirectTo:'login'},//para cuantdo la ruta está vacía
  {path:'**',pathMatch:'full',redirectTo:'login'}//cuando la ruta es erronea
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
