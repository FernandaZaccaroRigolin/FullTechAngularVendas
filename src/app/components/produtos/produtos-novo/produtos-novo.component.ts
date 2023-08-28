import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/classes/produto';
import { Unidade } from 'src/app/classes/unidade';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-novo',
  templateUrl: './produtos-novo.component.html',
  styleUrls: ['./produtos-novo.component.css']
})
export class ProdutosNovoComponent implements OnInit {
  constructor(
    private router: Router, 
    private service: ProdutosService) { }

  ngOnInit(): void {
    this.unidades = this.service.getUnidades();  
  }

  unidades: Unidade[] = [];
  produto: Produto = new Produto();

  fechar() : void {
    this.router.navigate(['produtos']);
  }

  incluir(produto: Produto) : void {
    this.service.postProdutoApi(produto)
      .subscribe({
        //next: resposta => console.log(resposta),
        complete: () => this.fechar(),
        error: erro => console.error(erro.message)
      });
  }
}
