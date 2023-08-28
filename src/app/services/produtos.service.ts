import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../classes/produto';
import { Unidade } from '../classes/unidade';

@Injectable() // este service está registrado em ProdutosModule
export class ProdutosService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8080/api/produtos/";

  public getUnidades() : Unidade[] {
    return [
      { sigla: 'kg', descricao: 'Kilogramas'},
      { sigla: 'pç', descricao: 'Peça (unidade)' },
      { sigla: 'lts', descricao: 'Litros'},
      { sigla: 'mts', descricao: 'Metros'},
      { sigla: 'dz', descricao: 'Dúzias'}
    ];
  }


  // lista de todos os produtos
  public getProdutosApi() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }

  //inclusão de produto
  public postProdutoApi(produto: Produto) : Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto);
  }

}
