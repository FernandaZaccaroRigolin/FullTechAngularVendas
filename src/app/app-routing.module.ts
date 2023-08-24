import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientesComponent } from './components/clientes/clientes/clientes.component';
import { ClienteNovoComponent } from './components/clientes/cliente-novo/cliente-novo.component';
import { ClienteAlteracaoComponent } from './components/clientes/cliente-alteracao/cliente-alteracao.component';
import { ClienteRemocaoComponent } from './components/clientes/cliente-remocao/cliente-remocao.component';

const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: 'full'},
  { path: "", component: HomeComponent},
  { path: "apresentacao", component: ApresentacaoComponent},
  { path: "clientes", component: ClientesComponent},
  { path: "clientes/novo", component: ClienteNovoComponent},
  { path: "clientes/alteracao/:id", component: ClienteAlteracaoComponent},
  { path: "clientes/remocao/:id", component: ClienteRemocaoComponent},
  { path: "**", component: NotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
