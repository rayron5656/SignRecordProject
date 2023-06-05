import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { RestorePasswordComponent } from 'src/app/components/restore-password/restore-password.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path : 'restorePassword', component: RestorePasswordComponent},
  {path: 'signup', component: SignupComponent},
  {path : '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
