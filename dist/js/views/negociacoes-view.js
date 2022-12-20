import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        var _a;
        return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${(_a = model.lista()) === null || _a === void 0 ? void 0 : _a.map((negociacao) => {
            return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
        })}
            </tbody>
            </table
        `;
    }
    formatar(data) {
        new Intl.DateTimeFormat().format(data);
    }
}
