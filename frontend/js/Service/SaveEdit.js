import EditItemFromAPI from "../api/EditItemFromAPI.js";
import ValidateInputSave from "../utils/ValidateinputSave.js";

const buttonEdit = document.getElementById("button_edit");

if (buttonEdit != null) {
  buttonEdit.addEventListener("click", () => {
    const { inputID, inputName, inputPublished, inputPrice } =
      ValidateInputSave;

    const editedItem = {
      nome: inputName,
      precoSteam: inputPrice,
      anoLancamento: inputPublished,
    };

    EditItemFromAPI(inputID, editedItem);
  });
}
