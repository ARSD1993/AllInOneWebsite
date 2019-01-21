import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistboardComponent } from './todolistboard/todolistboard.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { ShownewepisodesComponent } from './shownewepisodes/shownewepisodes.component';
import { AddnewepisodeComponent } from './addnewepisode/addnewepisode.component';
import { ShowdataComponent } from './showdata/showdata.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistboardComponent,
    AddtodoComponent,
    ShownewepisodesComponent,
    AddnewepisodeComponent,
    ShowdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
