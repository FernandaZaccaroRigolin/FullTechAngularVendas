import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientesComponent } from './components/clientes/clientes/clientes.component';
import { ClienteNovoComponent } from './components/clientes/cliente-novo/cliente-novo.component';
import { ClientesListaComponent } from './components/clientes/clientes-lista/clientes-lista.component';
import { ClienteAlteracaoComponent } from './components/clientes/cliente-alteracao/cliente-alteracao.component';
import { ClienteRemocaoComponent } from './components/clientes/cliente-remocao/cliente-remocao.component';
import { SubListaPipe } from './pipes/sub-lista.pipe';
import { LoginComponent } from './components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ApresentacaoComponent,
    NotFoundComponent,
    ClientesComponent,
    ClienteNovoComponent,
    ClientesListaComponent,
    ClienteAlteracaoComponent,
    ClienteRemocaoComponent,
    SubListaPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:8080"],
        disallowedRoutes: []
      }
    })    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
