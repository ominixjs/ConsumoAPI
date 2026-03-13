import DeleteItemFromDB from "./db/DeleteItemFromDB.js";

// Cria eventos pra cada botão da lista
const list = document.getElementById("game_list");
if (list == null) return;

list.addEventListener("click", (e) => {
  if (e.target.matches('button[id="btn_delete"]')) {
    const getId = e.target.dataset.id;
    DeleteItemFromDB(getId);
  }
});
