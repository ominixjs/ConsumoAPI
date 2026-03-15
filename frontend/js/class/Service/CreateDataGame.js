import ValidateInput from "./ValidateInput.js";
import CreateItemForAPI from "../api/CreateItemForAPI.js";

const btnCreate = document.getElementById("button_create");

// Criar novo item
if (btnCreate != null) {
  btnCreate.addEventListener("click", function () {
    // Valida campos de entrada de dados
    const getData = ValidateInput();

    if (!getData) {
      alert("Defina os valores corretamente!");
      return;
    }

    CreateItemForAPI(getData);
  });
}
