import { PedidoItemDTO } from "./pedido-item-dto";
import { Produto } from "./produto";

export class ItemDTO {
    id!: number;
    preco!: number;
    quantidade!: number;
    pedido!: PedidoItemDTO;
    produto!: Produto;
}
