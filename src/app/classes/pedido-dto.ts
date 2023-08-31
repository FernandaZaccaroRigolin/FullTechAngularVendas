export class PedidoDTO {

    // constructor() {
    //     this.cpf = '';
    //     this.data = '';
    //     this.pedido = '';
    // }

    private _cpf?: string;
    public get cpf(): string {
        return this._cpf as string;
    }
    public set cpf(cpf: string) {
        this._cpf = cpf;
    }
    
    
    private _data?: string;
    public get data() : string {
        return this._data as string;
    }
    public set data(v : string) {
        this._data = v;
    }
        
    private _pedido?: string;
    public get pedido() : string {
        return this._pedido as string;
    }
    public set pedido(v : string) {
        this._pedido = v;
    }
}
