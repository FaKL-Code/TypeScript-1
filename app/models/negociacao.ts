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

  public static formataData(data: string): Date {
    const exp = /-/g;
    const date = new Date(data.replace(exp, ","));
    return date;
  }

  public static criaDe(data: string, quantidade: string, valor: string) {
    const date = this.formataData(data);
    const quantidadeInt = parseInt(quantidade);
    const valorFloat = parseFloat(valor);
    return new Negociacao(date, quantidadeInt, valorFloat);
  }
}
