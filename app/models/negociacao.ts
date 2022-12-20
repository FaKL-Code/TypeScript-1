export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  public static criaDe(_data: string, _quantidade: string, _valor: string) {
    const exp = /-/g;
    const date = new Date(_data.replace(exp, ","));
    const quantidade = parseInt(_quantidade);
    const valor = parseFloat(_valor);
    return new Negociacao(date, quantidade, valor);
  }
}
