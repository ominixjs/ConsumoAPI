export default function CreateItemForAPI(item) {
  axios
    .post("http://localhost:3000/game", item)
    .then((response) => {
      if (response.status == 200) {
        alert("Game criado com sucesso!");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
