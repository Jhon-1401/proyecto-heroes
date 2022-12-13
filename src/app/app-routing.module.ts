import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioNgmodelComponent } from './components/formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivosComponent } from './components/formularios/formulario-reactivos/formulario-reactivos.component';
import { LoginComponent } from './components/login/login.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'pipes',component:TablaComponent},
  {path:'formulario/ngmodel',component:FormularioNgmodelComponent},
  {path:'formulario/reactivo',component:FormularioReactivosComponent},
  {path:'',pathMatch:'full',redirectTo:'login'},//para cuantdo la ruta está vacía
  {path:'**',pathMatch:'full',redirectTo:'login'},//cuando la ruta es erronea
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
