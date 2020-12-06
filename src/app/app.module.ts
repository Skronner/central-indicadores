import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConectaComponent } from './conecta/conecta.component';
// import { CartaControleComponent } from './carta-controle/carta-controle.component';
// import { GraficoControleComponent } from './carta-controle/grafico-controle/grafico-controle.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConectaComponent,
    // CartaControleComponent,
    // GraficoControleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
