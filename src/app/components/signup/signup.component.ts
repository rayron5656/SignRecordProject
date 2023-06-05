import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  pipe, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signForm: any;

  constructor(
    private fb : FormBuilder,
    private authService : AuthService,
    private router : Router
    ) {
    this.signForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      matchPassword: ['',Validators.required],
      fullName: ['',Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.signForm.invalid){
      return;
    }
    this.authService.isEmailAvailableRequest(this.signForm.value.email).subscribe(
      (data : any) => {
        if (data.email){
          alert("Email already exists");
          return;
        }else{
          const user = {
            email: this.signForm.value.email,
            password: this.signForm.value.password,
            fullName: this.signForm.value.fullName
          }
          this.authService.signUpRequest(user).subscribe(
            (data) => {
              console.log(data);
              this.router.navigate(['/login']);
            }

          );
        }
      }
    )
    
  }

}
