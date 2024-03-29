import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { DbzService } from './dbz/services/dbz.service';


@NgModule({
  declarations: [// componentes
    AppComponent
   
  ], // importacion de modulos
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
    
  ],
  providers: [DbzService], // servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
