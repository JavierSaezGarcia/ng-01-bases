import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [// componentes
    AppComponent
   
  ], // importacion de modulos
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [], // servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
