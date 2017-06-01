import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UsersComponent } from './users.component';
import { PlayersComponent } from './players.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UsersComponent, PlayersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
