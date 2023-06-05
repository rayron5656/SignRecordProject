import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(
    private fb : FormBuilder,
    private authService :AuthService,
    private router :Router
    ) {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  

  ngOnInit(): void {
      if (localStorage.getItem('token')?.length !== 0) {
        this.authService.jwtQuickCheck().subscribe(
          (data : any) => {
            if (data) {
              localStorage.setItem("user" ,data.decoded.fullName);
              
              this.router.navigate(['/dashboard']);
              
            }
            else{
              localStorage.clear();

              this.router.navigate(['/home']);
            }
          },
          (error) => {
            console.log(error);
            localStorage.clear();

          }
        )
        
      }
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
    this.authService.loginRequest(this.loginForm.value).subscribe(
      (data : any) => {
        console.log(data);
        const token = data.token;
        if (token) {
          localStorage.setItem("user" ,data.decoded.fullName);
          localStorage.setItem("token" ,token);
          this.router.navigate(['/dashboard']);
        }
        
      }
    )

  }

}
