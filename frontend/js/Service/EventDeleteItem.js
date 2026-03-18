import DeleteItemFromDB from "../api/DeleteItemFromAPI.js";

// Cria eventos pra cada botão da lista
const list = document.getElementById("game_list");

if (list != null) {
  list.addEventListener("click", (e) => {
    if (e.target.matches('button[id="btn_delete"]')) {
      const getId = e.target.dataset.id;
      console.log(getId);

      DeleteItemFromDB(getId);
    }
  });
}
