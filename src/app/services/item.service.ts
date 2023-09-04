import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemNovoDTO } from '../classes/item-novo-dto';
import { Observable } from 'rxjs';
import { ItemDTO } from '../classes/item-dto';
import { ItensPedidoDTO } from '../classes/itens-pedido-dto';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8080/api/itens/";

  public postItemApi(item: ItemNovoDTO) : Observable<ItemDTO> {
    return this.http.post<ItemDTO>(this.baseUrl, item);
  }

  public getItensApi(id?: number) : Observable<ItensPedidoDTO[]> {
    let url: string = id ? this.baseUrl + id : this.baseUrl;
    return this.http.get<ItensPedidoDTO[]>(url);
  }
}
