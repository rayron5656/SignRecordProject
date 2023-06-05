import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent implements OnInit {

  restoreForm: any;

  constructor(
    private authService : AuthService,
    private fb : FormBuilder
    ) {
    this.restoreForm = this.fb.group({
      email: ['',Validators.required]
    });

  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.restoreForm.value.email === "") {
      return;
    }

    this.authService.restorePasswordRequest(this.restoreForm.value.email).subscribe(
      (data) => {
        data.message ? alert(data.message) : alert(data.error); 
      }
    )
  }

}
