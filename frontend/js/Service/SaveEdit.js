import EditItemFromAPI from "../api/EditItemFromAPI.js";

const buttonEdit = document.getElementById("button_edit");

if (buttonEdit != null) {
  buttonEdit.addEventListener("click", () => {
    const inputID = document.getElementById("idEdit")?.value;
    if (inputID == undefined || inputID == "" || isNaN(inputID)) return;

    const inputName = document.getElementById("nameEdit")?.value;
    if (inputName == undefined) return;

    const inputPublished = document.getElementById("publishedEdit")?.value;
    if (inputPublished == undefined) return;

    const inputPrice = document.getElementById("priceEdit")?.value;
    if (inputPrice == undefined) return;

    const editedItem = {
      nome: inputName,
      precoSteam: inputPrice,
      anoLancamento: inputPublished,
    };

    EditItemFromAPI(inputID, editedItem);
  });
}
