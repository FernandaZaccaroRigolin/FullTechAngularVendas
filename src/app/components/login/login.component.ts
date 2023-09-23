import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';
import { LoginModel } from 'src/app/interfaces/login-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: AuthService) {}
  ngOnInit(): void {
    this.user = { username:'', password: '' };
  }

  fechar() : void {
    this.router.navigate(['/']); // home
  }

  //user: Usuario = new Usuario();
  user!: LoginModel;
  erro!: string;

  // validar(user: Usuario) : void {
  //   if(user.nome === 'admin' && user.senha === 'admin') {
  //     // usuario logado (fake)
  //     localStorage.setItem('nome_usuario', user.nome);
  //     this.fechar();
  //   } else {
  //     this.erro = "Usuário ou senha inválidos";
  //   }
  // }

  validar(user: LoginModel): void {
    this.service.validate(user)
      .subscribe({
        next: response => { 

          localStorage.setItem("jwt", response.accessToken);
          localStorage.setItem("nome_usuario", response.username);
          this.fechar();
        },
        error: erro => {
          this.erro =  erro.message;
        }
    });
  }  

}
