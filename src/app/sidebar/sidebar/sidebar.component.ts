import { Component } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get busquedas(){
    return this.busqueda.mostrarBusquedas;
  }

  constructor(private busqueda: BusquedaService){}

  buscar( query: string){
    this.busqueda.buscar(query);
  }

}
