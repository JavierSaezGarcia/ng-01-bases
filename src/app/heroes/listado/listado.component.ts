import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {
  heroeBorrado: string= "";
  heroes:string[] = ['Spiderman','Ironman','Silver Surfer','Hulk','Thor','Capitán América'];
 
  borrarHeroe() {
    console.log("Borrando...");
    this.heroeBorrado = this.heroes[this.heroes.length -1]  || '';
    this.heroes.splice(-1,1);  
  }
}
