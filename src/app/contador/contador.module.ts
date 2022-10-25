import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent // esto se vera fuera
    ],
    imports: [
        CommonModule  // importa muchas directivas como ngFor etc  
    ]

})
export class ContadorModule{}