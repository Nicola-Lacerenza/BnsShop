import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { PrivatoComponent } from './components/privato/privato.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:"/homePage",component:AppComponent},
  /*{path:"/paginaPrivata",component:PrivatoComponent,CanActivate:[authGuard]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
