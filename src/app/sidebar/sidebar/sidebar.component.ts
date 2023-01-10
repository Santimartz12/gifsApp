import { Component, EventEmitter, Output } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() openDoc = new EventEmitter<boolean>();

  isSidebarvisible = false;

  get busquedas(){
    return this.busqueda.mostrarBusquedas;
  }

  constructor(private busqueda: BusquedaService){}

  buscar( query: string){
    this.busqueda.buscar(query);
    this.isSidebarvisible = false;
  }

  mostrarDocumentacion(){
    this.openDoc.emit();
  }

  visibleSidebar(){
    this.isSidebarvisible = !this.isSidebarvisible;
  }

}
