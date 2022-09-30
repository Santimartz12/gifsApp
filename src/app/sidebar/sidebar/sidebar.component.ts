import { Component } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get busquedas(){
    return this.busqueda.mostrarResultados;
  }

  constructor(private busqueda: BusquedaService){}

}
