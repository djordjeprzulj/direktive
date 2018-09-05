import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayersByCountryComponent } from './players-by-country/players-by-country.component';
import { CardHoverDirective } from './card-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayersByCountryComponent,
    CardHoverDirective
  ],
  imports: [
    BrowserModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
