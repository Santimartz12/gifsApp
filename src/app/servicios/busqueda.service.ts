import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  private _resultados: string[] =[];

  agregarResultado( query: string ){
    this._resultados.push(query);
  }

  get mostrarResultados(){
    return this._resultados;
  }

}
