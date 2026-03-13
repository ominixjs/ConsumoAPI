export default class List {
  CreateList(data) {
    this.container = document.getElementById("game_list");
    if (this.container == null) return;

    this.li = document.createElement("li");
    this.li.dataset.id = data.id;
    this.li.dataset.nome = data.nome;
    this.li.dataset.anoLancamento = data.anoLancamento;
    this.li.dataset.precoSteam = data.precoSteam;
    this.li.innerHTML = `ID: ${data.id}<br>Nome: ${data.nome}<br>Preço Steam: R$${data.precoSteam}<br> Publicado: ${data.anoLancamento}<br><hr>`;
    this.li.style.marginTop = "1rem";

    this.btnEdite = document.createElement("button");
    this.btnEdite.id = "btn_edite";
    this.btnEdite.dataset.id = data.id;
    this.btnEdite.textContent = "Editar";
    this.btnEdite.style.marginRight = ".5rem";

    this.btnDelete = document.createElement("button");
    this.btnDelete.dataset.id = data.id;
    this.btnDelete.id = "btn_delete";
    this.btnDelete.textContent = "Delete";

    this.li.append(this.btnEdite, this.btnDelete);
    this.container.appendChild(this.li);
  }
}
