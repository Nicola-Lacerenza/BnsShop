import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private static login : boolean = false;

  constructor() { }
public static isLogged() : boolean {
  return this.login
}
public static setLogin():void {
this.login = true;
}

public static logout():void{
  this.login= false;
}
}
