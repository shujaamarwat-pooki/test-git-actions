import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './block/button/button.component';
import { ButtonImageComponent } from './block/button-image/button-image.component';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DropdownComponent } from './block/dropdown/dropdown.component';
import { ButtonRedComponent } from './block/button-red/button-red.component';
import { ButtonGreenComponent } from './block/button-green/button-green.component';
import { ButtonYellowComponent } from './block/button-yellow/button-yellow.component';
import { ButtonPurpleComponent } from './block/button-purple/button-purple.component';
import { ButtonBlueComponent } from './block/button-blue/button-blue.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonImageComponent,
    DisplayComponent,
    HomeComponent,
    NotfoundComponent,
    DropdownComponent,
    ButtonRedComponent,
    ButtonGreenComponent,
    ButtonYellowComponent,
    ButtonPurpleComponent,
    ButtonBlueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
