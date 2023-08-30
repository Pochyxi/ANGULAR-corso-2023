import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiclareUnArrayComponent } from './ciclare-un-array/ciclare-un-array.component';
import { FiglioComponent } from './figlio/figlio.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CiclareUnArrayComponent,
    FiglioComponent,
    UserDetailComponent
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
