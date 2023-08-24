import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../classes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  baseUrl : string = "http://localhost:8080/api/clientes/";

  // lista de todos os clientes
  public getClientesApi() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  // busca por um cliente pelo id (cpf)
  public getClienteApi(cpf: string) : Observable<Cliente> {
    const url = `${this.baseUrl}${cpf}`; 
    return this.http.get<Cliente>(url);
  }

  // inclusão de um novo cliente
  public postClienteApi(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  // alteracao de cliente
  public putClienteApi(cliente: Cliente, cpf: string): Observable<Cliente>{
    const url = `${this.baseUrl}${cpf}`;
    return this.http.put<Cliente>(url, cliente);
  }  

  //remoção do cliente
  public deleteClienteApi(cpf: string): Observable<string> {
    const url = `${this.baseUrl}${cpf}`;
    return this.http.delete<string>(url);
  }
  



}
