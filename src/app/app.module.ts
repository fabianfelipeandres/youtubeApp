import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { YoutubeService } from './services/youtube.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HomeComponent,
    NavbarComponent,
    HttpClientModule
  ],
  exports:[HttpClient],

  providers: [YoutubeService],
})
export class AppModule { }
