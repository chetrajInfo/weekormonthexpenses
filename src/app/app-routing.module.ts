import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  // Define a route for the login component
  {
    path: 'login',
    component: LoginComponent
  },
  // Define a route for the register component
  {
    path: 'register',
    component: RegistrationComponent
  },
  // Define a default route that redirects to login
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
