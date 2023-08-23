import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent {

  constructor(private router: Router) {}

  //incluir() {

  //}

  fechar() {
    this.router.navigate(['clientes']) ;
  }

}
