import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {
  
  constructor(private service: ProdutosService) {}

  ngOnInit(): void {
    this.listar();
  }

  produtos: Produto[] = [];

  listar() : void {
    this.service.getProdutosApi().subscribe(resposta => this.produtos = resposta);
  }
}
