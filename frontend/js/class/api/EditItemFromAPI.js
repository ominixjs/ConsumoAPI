export default function EditItemFromAPI(id, item) {
  axios
    .put("http://localhost:3000/game/" + id, item)
    .then((response) => {
      if (response.status == 200) {
        alert("Edição feita com sucesso!");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
