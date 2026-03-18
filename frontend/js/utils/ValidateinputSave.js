export default function ValidateInputSave() {
  const inputID = document.getElementById("idEdit")?.value;
  if (inputID == undefined || inputID == "" || isNaN(inputID)) return;

  const inputName = document.getElementById("nameEdit")?.value;
  if (inputName == undefined) return;

  const inputPublished = document.getElementById("publishedEdit")?.value;
  if (inputPublished == undefined) return;

  const inputPrice = document.getElementById("priceEdit")?.value;
  if (inputPrice == undefined) return;

  return { inputID, inputName, inputPublished, inputPrice };
}
