import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
// primero declaro (declarations) los componentes en este caso HeroeComponent Y ListadoComponent
// que cosas quiero hacer publicas con exports:
@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent // esto se vera fuera
    ],
    imports: [
        CommonModule  // importa muchas directivas como ngFor etc  
    ]

})
export class HeroesModule{}