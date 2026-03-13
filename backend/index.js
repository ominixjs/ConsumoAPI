import express from "express";
const app = express();
import cors from "cors";

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = [
  {
    id: 1,
    nome: "Baldur's Gate 3",
    precoSteam: 199.99,
    anoLancamento: 2023,
  },
  {
    id: 2,
    nome: "Cyberpunk 2077",
    precoSteam: 199.99,
    anoLancamento: 2020,
  },
  {
    id: 3,
    nome: "Elden Ring",
    precoSteam: 229.99,
    anoLancamento: 2022,
  },
  {
    id: 4,
    nome: "Palworld",
    precoSteam: 88.99,
    anoLancamento: 2024,
  },
  {
    id: 5,
    nome: "Hogwarts Legacy",
    precoSteam: 249.99,
    anoLancamento: 2023,
  },
];

app.get("/games", (req, res) => {
  res.statusCode = 200;
  res.json(db);
});

app.get("/game/:id", (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) return res.sendStatus(400);

  const game = db.find((g) => g.id == id);

  if (game == undefined) return res.sendStatus(404);

  res.json(game);
});

app.post("/game", (req, res) => {
  const { nome, precoSteam, anoLancamento } = req.body;

  db.push({ id: db.length + 1, nome, precoSteam, anoLancamento });

  res.sendStatus(200);
});

app.delete("/game/:id", (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) return res.sendStatus(400);

  const gameIndex = db.findIndex((g) => g.id == id);

  if (gameIndex == -1) return res.sendStatus(404);

  db.splice(gameIndex, 1);

  res.sendStatus(200);
});

app.put("/game/:id", (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) return res.sendStatus(400);

  const game = db.find((g) => g.id == id);

  if (game == undefined) return res.sendStatus(404);

  const { nome, precoSteam, anoLancamento } = req.body;

  if (nome != undefined) game.nome = nome;
  if (nome != undefined) game.precoSteam = precoSteam;
  if (nome != undefined) game.anoLancamento = anoLancamento;

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
