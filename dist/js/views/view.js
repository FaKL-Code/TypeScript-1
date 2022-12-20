export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        escapar ? (this.escapar = escapar) : this.escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
