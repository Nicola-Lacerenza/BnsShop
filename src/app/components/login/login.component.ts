import { Component,OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  autenticato: Boolean=false;
  errMsg : string = "Spiacente,la userid e/o la password sono errati!";
/*constructor(private router:Router){

}*/

ngOnInit(): void {

}

public dologin(form:NgForm) : void {


if (form.valid){
  if (form.value.userId=="pippo" && form.value.password=="password"){
    this.autenticato = true
  }
    else
    this.autenticato = false

    /*AuthService.setLogin();
    this.router.navigate(["paginaPrivata"])*/
  }
}
/*public logout(): void{
  AuthService.logout();
  this.router.navigate(["homePage"])
}*/
}
