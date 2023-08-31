import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from '../../components/produtos/produtos/produtos.component';
import { ProdutosNovoComponent } from '../../components/produtos/produtos-novo/produtos-novo.component';
import { ProdutosListaComponent } from '../../components/produtos/produtos-lista/produtos-lista.component';
import { ProdutosService } from 'src/app/services/produtos.service';
import { FormsModule } from '@angular/forms';
import { FiltrarProdutosPipe } from '../../pipes/filtrar-produtos.pipe';
import { LOCALE_ID } from '@angular/core';
import { DescSizePipe } from '../../pipes/desc-size.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutosNovoComponent,
    ProdutosListaComponent,
    FiltrarProdutosPipe,
    DescSizePipe
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ],
  providers: [
    ProdutosService,
    // {
    //   provide: LOCALE_ID,
    //   useValue: "pt"
    // }
  ]
})
export class ProdutosModule { }
