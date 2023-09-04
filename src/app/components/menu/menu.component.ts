import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) {}

  @Input() usuario: string = "";
  @Output() novoEvento = new EventEmitter<string>();

  executar(valor: string) : void {
    this.novoEvento.emit(valor);
  }

  // este método está sendo desconsiderado
  efetuarLogoff() : void {
    //localStorage.removeItem('nome_usuario');
    localStorage.clear();
    this.router.navigate(['/apresentacao'])
  }
}
