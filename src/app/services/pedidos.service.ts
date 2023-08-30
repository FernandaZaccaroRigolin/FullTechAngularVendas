import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoDTO } from '../classes/pedido-dto';
import { Observable } from 'rxjs';
import { PedidoClienteDTO } from '../classes/pedido-cliente-dto';
import { ClientePedidosDTO } from '../classes/cliente-pedidos-dto';

@Injectable()
export class PedidosService {

  constructor(private http: HttpClient) { }
  
  baseUrl: string = "http://localhost:8080/api/pedidos/";

  public getPedidosApi(cpf?: string) : Observable<ClientePedidosDTO[]> {
    let url : string = this.baseUrl;
    if(cpf){
      url += cpf;
    }
    return this.http.get<ClientePedidosDTO[]>(url);
  }


  public postPedidoApi(pedido: PedidoDTO) : Observable<PedidoClienteDTO> {
    let url : string = "dto";
    return this.http.post<PedidoClienteDTO>(`${this.baseUrl}${url}` , pedido);
  }

}
