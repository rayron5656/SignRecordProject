import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Address = "http://localhost:5050/api/v1/auth/";

  constructor(private http : HttpClient) { }

  isEmailAvailableRequest(email : string){
    return this.http.post<any>(this.Address + `emailCheck`,{email: email});
  }

  signUpRequest(credentials : any){
    return this.http.post<any>(this.Address + "register", {credentials: credentials});
  }

  loginRequest(credentials : any){
    return this.http.post<any>(this.Address + "login", credentials);
  }

  jwtQuickCheck(){
    return this.http.get<any>(this.Address + "jwtQuickCheck" ,{ headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}});
  }

  restorePasswordRequest(email : string){
    return this.http.get<any>(this.Address + `restorePassword?email=${email}`,);
  }

  
  
}
