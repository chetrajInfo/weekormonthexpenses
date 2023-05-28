import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { UsernameDirective } from './shared/directives/username.directive';
import { EmailvalidatorDirective } from './shared/directives/emailvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    RegistrationComponent,
    UsernameDirective,
    EmailvalidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
