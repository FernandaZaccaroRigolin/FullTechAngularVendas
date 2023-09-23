import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientesComponent } from './components/clientes/clientes/clientes.component';
import { ClienteNovoComponent } from './components/clientes/cliente-novo/cliente-novo.component';
import { ClienteAlteracaoComponent } from './components/clientes/cliente-alteracao/cliente-alteracao.component';
import { ClienteRemocaoComponent } from './components/clientes/cliente-remocao/cliente-remocao.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "apresentacao", component: ApresentacaoComponent},
  { path: "clientes", component: ClientesComponent, canActivate: [AuthGuard] },
  { path: "clientes/novo", component: ClienteNovoComponent, canActivate: [AuthGuard]},
  { path: "clientes/alteracao/:id", component: ClienteAlteracaoComponent, canActivate: [AuthGuard] },
  { path: "clientes/remocao/:id", component: ClienteRemocaoComponent, canActivate: [AuthGuard]},

  { path: "produtos", loadChildren: () => import('./modules/produtos/produtos.module').then(m => m.ProdutosModule)},
  { path: "pedidos", loadChildren: () => import('./modules/pedidos/pedidos.module').then(m => m.PedidosModule)},
  { path: "itens", loadChildren: () => import('./modules/item/item.module').then(m => m.ItemModule)},
  
  { path: "login", component: LoginComponent },
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
