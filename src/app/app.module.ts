import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { BoardDirective } from './directive/board.directive';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

//try
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardDirective,
    HeroJobAdComponent,
    HeroProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
