import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from "./app-routing.module";
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    PictureListComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
