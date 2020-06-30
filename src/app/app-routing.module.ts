import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmMailComponent } from './confirm-mail/confirm-mail.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { DocumentStatusComponent } from './document-status/document-status.component';
import { DocumentSignatureComponent } from './document-signature/document-signature.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
      children: [
          {path: 'profile', component: ProfileComponent },
          {path: 'settings', component: SettingsComponent },
          {path: 'status', component: DocumentStatusComponent },
          {path: 'signature', component: DocumentSignatureComponent },
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'confirm-mail', component: ConfirmMailComponent},
  {path: 'lock-screen', component: LockScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
