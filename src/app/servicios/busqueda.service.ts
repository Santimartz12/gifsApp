import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gifs, SearchGiftResponse } from '../interfaces/giphyInterface';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  private _url: string = "https://api.giphy.com/v1/gifs";
  private _busquedas: string[] = [];
  private _resultados: Gifs[] = [];
  titulo: string = '';
  trending : boolean = false;

  constructor(private http: HttpClient) {

    this._busquedas = JSON.parse(localStorage.getItem('Busquedas')!) || [];

    this.trending = true;

    const params = new HttpParams()
    .set('api_key',"bf6j3KgZJ64IFOsvj3kZliJsaCHlSybd").set('limit',"15");

    this.http.get<SearchGiftResponse>(`${this._url}/trending`, {params}).subscribe( response => {
      this._resultados = response.data; 
    } )

   }

  buscar(query: string) {

    this.trending = false;
    this.titulo = query;

    query = query.toLowerCase();

    if (!this._busquedas.includes(query)) {
      this._busquedas.unshift(query);
      this._busquedas = this._busquedas.slice(0, 10);
    }

    localStorage.setItem('Busquedas',JSON.stringify(this._busquedas));

    const params = new HttpParams()
    .set('api_key',"bf6j3KgZJ64IFOsvj3kZliJsaCHlSybd")
    .set('q',query).set('limit',"15");

    this.http.get<SearchGiftResponse>(`${this._url}/search`, {params}).subscribe( response => {
      this._resultados = response.data; 
    } )

  }

  get mostrarBusquedas() {
    return [...this._busquedas];
  }

  get resultados(){
    return [...this._resultados]
  }

}
