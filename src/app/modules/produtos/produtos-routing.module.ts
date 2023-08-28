import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosListaComponent } from 'src/app/components/produtos/produtos-lista/produtos-lista.component';
import { ProdutosNovoComponent } from 'src/app/components/produtos/produtos-novo/produtos-novo.component';
import { ProdutosComponent } from 'src/app/components/produtos/produtos/produtos.component';

const routes: Routes = [
  { path: "", component: ProdutosComponent },
  { path: "novo", component: ProdutosNovoComponent },
  { path: "lista", component: ProdutosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
