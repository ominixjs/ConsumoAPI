import Render from "../ui/Render.js";
import AxiosConfig from "../utils/AxiosConfig.js";

export default function initApi() {
  // Valida se o token foi criado
  if (!AxiosConfig()) {
    console.error("Usuário ausente, faça login ou cadastro");
    return;
  }

  // Carregar todos os itens
  axios
    .get("http://localhost:3000/games", AxiosConfig())
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
