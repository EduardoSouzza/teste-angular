import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSettingsService } from './services/appSettings.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastarComponent } from './cadastar/cadastar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [
    AppSettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
