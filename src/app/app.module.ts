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

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonImageComponent,
    DisplayComponent,
    HomeComponent,
    NotfoundComponent,
    DropdownComponent,
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
