import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FooterModule} from 'lib-playground';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
