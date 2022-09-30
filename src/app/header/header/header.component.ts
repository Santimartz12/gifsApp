import { Component, ElementRef ,ViewChild } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  @ViewChild('inputBuscar') entradaInput!: ElementRef<HTMLInputElement>;

  constructor(private busqueda: BusquedaService){}

  mostrarTexto(){

    //Se crea una variable con los datos importantes para ahorrar tiempo
    const valor: string = this.entradaInput.nativeElement.value;  
    
    //Se agrega en el servicio para que pueda ser trabajado en varios lugares
    this.busqueda.agregarResultado(valor);

    //Se limpia el buscador
    this.entradaInput.nativeElement.value = "";
  
  }

}
