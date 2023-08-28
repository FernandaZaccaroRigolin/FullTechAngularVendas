import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  constructor(private router: Router) { }

  novoProduto() : void {
    this.router.navigate(['produtos/novo']);
  }
}
