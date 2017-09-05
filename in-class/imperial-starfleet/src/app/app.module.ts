import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeathSquareComponent } from './death-square/death-square.component';

import { TieFighterComponent } from './tie-fighter/tie-fighter.component';

import { EngineerModule } from './engineer/engineer.module';
 
@NgModule({
  declarations: [
    AppComponent,
    DeathSquareComponent,
    TieFighterComponent
  ],
  imports: [
    BrowserModule,
    EngineerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
