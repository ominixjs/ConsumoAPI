// Cria campos para edição de dados
const list = document.getElementById("game_list");

if (list != null) {
  list.addEventListener("click", (e) => {
    if (e.target.matches('button[id="btn_edit"]')) {
      const getId = e.target.dataset.id - 1;
      const nodeList = document.querySelectorAll("#game_list li");

      const inputID = document.getElementById("idEdit");
      if (inputID == null) return;

      const inputName = document.getElementById("nameEdit");
      if (inputName == null) return;

      const inputPublished = document.getElementById("publishedEdit");
      if (inputPublished == null) return;

      const inputPrice = document.getElementById("priceEdit");
      if (inputPrice == null) return;

      inputID.value = nodeList[getId].dataset.id;
      inputName.value = nodeList[getId].dataset.nome;
      inputPublished.value = nodeList[getId].dataset.anoLancamento;
      inputPrice.value = nodeList[getId].dataset.precoSteam;
    }
  });
}
