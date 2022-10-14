import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { LeilaoLiveComponent } from './views/leilao-live/leilao-live.component';
import { LeilaoAgendsComponent } from './views/leilao-agends/leilao-agends.component';
import { DetailsLiveComponent } from './views/details-live/details-live.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ToolbarComponent } from './views/toolbar/toolbar.component';
import { DetailsAgendsComponent } from './components/details-agends/details-agends.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeilaoLiveComponent,
    LeilaoAgendsComponent,
    DetailsLiveComponent,
    LoginComponent,
    CadastroComponent,
    ToolbarComponent,
    DetailsAgendsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatTreeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
