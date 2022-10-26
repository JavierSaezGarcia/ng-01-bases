import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
  
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0

  }
  // el @output sirve para emitir eventos
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar(){
    if (this.nuevo.nombre.trim().length === 0){ return }
   
    // esto emite un nuevo personaje que hemos creado genericamente la linea del output
    this.onNuevoPersonaje.emit(this.nuevo);
    // esto reinicia a vacio los inputs
    this.nuevo = { nombre:'', poder:0};
  }
 
}
