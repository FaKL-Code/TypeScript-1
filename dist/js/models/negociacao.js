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
    static criaDe(_data, _quantidade, _valor) {
        const exp = /-/g;
        const date = new Date(_data.replace(exp, ","));
        const quantidade = parseInt(_quantidade);
        const valor = parseFloat(_valor);
        return new Negociacao(date, quantidade, valor);
    }
}
