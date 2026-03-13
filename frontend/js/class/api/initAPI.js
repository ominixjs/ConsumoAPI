import Render from "../Service/Render.js";

export default function initApi() {
  // Carregar todos os itens
  axios
    .get("http://localhost:3000/games")
    .then((response) => {
      if (response.status === 200) {
        const games = response.data;

        new Render().RenderData(games);
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
}
