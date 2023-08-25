import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from '../../components/produtos/produtos/produtos.component';
import { ProdutosNovoComponent } from '../../components/produtos/produtos-novo/produtos-novo.component';
import { ProdutosListaComponent } from '../../components/produtos/produtos-lista/produtos-lista.component';
import { ProdutosService } from 'src/app/services/produtos.service';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutosNovoComponent,
    ProdutosListaComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ],
  providers: [
    ProdutosService
  ]
})
export class ProdutosModule { }
