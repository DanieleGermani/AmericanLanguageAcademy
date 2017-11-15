import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Routes
import { app_routing } from './app.routes';
//Services

import { UserService } from './services/user.service';
import { CamaraService } from './services/camara.service';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { CamaraComponent } from './components/camara/camara.component';
import { HomeComponent } from './components/home/home.component';
import { NewCamaraComponent } from './components/camara/new-camara/new-camara.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NewUserComponent,
    CamaraComponent,
    HomeComponent,
    NewCamaraComponent
  ],
  imports: [
     BrowserModule,
     HttpModule,
     app_routing,
     FormsModule
  ],
  providers: [UserService,CamaraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
