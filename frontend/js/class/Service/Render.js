import List from "../ui/List.js";

export default class Render {
  // Cria uma lista no DOM
  RenderData(data) {
    data.forEach((game) => {
      new List().CreateList(game);
    });
  }
}
