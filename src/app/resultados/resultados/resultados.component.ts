import { Component } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  constructor( private busquedas: BusquedaService){

  }

  get resultados(){
    return [...this.busquedas.resultados];
  }

  get titulo(){
    return this.busquedas.titulo;
  }

}
