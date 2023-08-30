import { Cliente } from "./cliente";

export class PedidoClienteDTO {

    constructor() {
      this.id = 0;
      this.data = new Date();
      this.numeroPedido = '';
      this.cliente = new Cliente();
    }

    id: number;
    data: Date;
    numeroPedido: string;
    cliente: Cliente;
}
