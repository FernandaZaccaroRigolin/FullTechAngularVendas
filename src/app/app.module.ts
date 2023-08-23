import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientesComponent } from './components/clientes/clientes/clientes.component';
import { ClienteNovoComponent } from './components/clientes/cliente-novo/cliente-novo.component';
import { ClientesListaComponent } from './components/clientes/clientes-lista/clientes-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ApresentacaoComponent,
    NotFoundComponent,
    ClientesComponent,
    ClienteNovoComponent,
    ClientesListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
