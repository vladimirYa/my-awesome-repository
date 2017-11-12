import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { SignUpService } from './services/sign-up.service';
import { HttpModule } from '@angular/http';

const routes = [
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-up'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    HttpModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
