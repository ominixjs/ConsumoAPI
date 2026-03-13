export default function DeleteItemFromDB(id) {
  axios
    .delete(`http://localhost:3000/game/${id}`)
    .then((response) => {
      if (response.status == 200) {
        alert("Item deletado com sucesso");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}