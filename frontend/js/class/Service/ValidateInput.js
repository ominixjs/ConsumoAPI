export default function CreateDataGame() {
  const nome = document.getElementById("name")?.value;
  if (nome == undefined || nome == "") return false;

  const precoSteam = document.getElementById("price")?.value;
  if (precoSteam == undefined || precoSteam == "") return false;

  const anoLancamento = document.getElementById("published")?.value;
  if (anoLancamento == undefined || anoLancamento == "") return false;

  return { nome, precoSteam, anoLancamento };
}
