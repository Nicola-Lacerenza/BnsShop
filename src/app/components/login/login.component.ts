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
  consentito : Boolean= false;
  errMsg : string = "Spiacente,la userid e/o la password sono errati!";
  okMsg : string = "Accesso consentito";
/*constructor(private router:Router){

}*/

ngOnInit(): void {

}






public dologin(form:NgForm) : void {


/*if (form.valid){*/
  if (form.value.userId=="pippo" && form.value.password=="password"){
    this.autenticato = true
    this.consentito = true
  }
    else
    this.autenticato = false
    this.consentito = false

    /*AuthService.setLogin();
    this.router.navigate(["paginaPrivata"])*/
  }
/*else{
  this.autenticato = false
  this.consentito = false
}
}*/
/*public logout(): void{
  AuthService.logout();
  this.router.navigate(["homePage"])
}*/
}
