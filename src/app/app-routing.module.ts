import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'pipes',component:TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
