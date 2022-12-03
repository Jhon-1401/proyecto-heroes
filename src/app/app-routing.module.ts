import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './component/tabla/tabla.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'pipes',component:TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
