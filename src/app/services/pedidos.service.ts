import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../classes/pedido';
import { Observable } from 'rxjs';

@Injectable() // este service está registrado em PedidosModule
export class PedidosService {

  constructor(private http: HttpClient) { }

  baseUrl : string = "http://localhost:8080/api/pedidos/";

  // lista de todos os pedidos
  public getPediosApi() : Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.baseUrl);
  }  

  // inclusão de um novo produtos
  public postProdutoApi(pedido: Pedido) : Observable<Pedido> {
    return this.http.post<Pedido>(this.baseUrl, pedido);
  }


}

