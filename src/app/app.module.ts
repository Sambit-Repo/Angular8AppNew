import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent
      }
    ]),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
