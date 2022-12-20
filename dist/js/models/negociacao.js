export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static formataData(data) {
        const exp = /-/g;
        const date = new Date(data.replace(exp, ","));
        return date;
    }
    static criaDe(data, quantidade, valor) {
        const date = this.formataData(data);
        const quantidadeInt = parseInt(quantidade);
        const valorFloat = parseFloat(valor);
        return new Negociacao(date, quantidadeInt, valorFloat);
    }
}
