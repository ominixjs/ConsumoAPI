import express, { json } from "express";
const app = express();
import cors from "cors";
import jwt from "jsonwebtoken";

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = {
  games: [
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
  ],

  users: [
    {
      id: 1,
      nome: "Ana Beatriz Lima",
      dataNascimento: "1995-04-12",
      email: "ana.lima@gmail.com",
      senha: "ana12345",
    },
    {
      id: 2,
      nome: "Carlos Eduardo Martins",
      dataNascimento: "1989-09-21",
      email: "carlos.martins@gmail.com",
      senha: "carlose89",
    },
    {
      id: 3,
      nome: "Juliana Ferreira",
      dataNascimento: "2001-01-30",
      email: "juliana.ferreira@gmail.com",
      senha: "juli2001",
    },
    {
      id: 4,
      nome: "Rafael Costa",
      dataNascimento: "1993-06-18",
      email: "rafael.costa@gmail.com",
      senha: "rafa123",
    },
    {
      id: 5,
      nome: "Mariana Oliveira",
      dataNascimento: "1998-11-05",
      email: "mariana.oliveira@gmail.com",
      senha: "mariolive98",
    },
  ],
};

app.get("/games", (req, res) => {
  res.statusCode(200);
  res.json(db.games);
});

app.get("/game/:id", (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) return res.sendStatus(400);

  const game = db.games.find((g) => g.id == id);

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

  const gameIndex = db.games.findIndex((g) => g.id == id);

  if (gameIndex == -1) return res.sendStatus(404);

  db.games.splice(gameIndex, 1);

  res.sendStatus(200);
});

app.put("/game/:id", (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) return res.sendStatus(400);

  const game = db.games.find((g) => g.id == id);

  if (game == undefined) return res.sendStatus(404);

  const { nome, precoSteam, anoLancamento } = req.body;

  if (nome != undefined) game.nome = nome;
  if (precoSteam != undefined) game.precoSteam = precoSteam;
  if (anoLancamento != undefined) game.anoLancamento = anoLancamento;

  res.sendStatus(200);
});

app.post("/auth", (req, res) => {
  const { email, senha } = req.body;

  if (email == undefined) {
    res.status(400);
    return res.json({ err: "Email inválido" });
  }

  const user = db.users.find((u) => u.email == email);

  if (user == undefined) {
    res.status(404);
    return res.json({ err: "Usuário não cadastrado" });
  }

  if (user.senha != senha) {
    res.status(404);
    return res.json({ err: "Senha inválida" });
  }

  res.status(200);
  res.json({ success: "Seja bem vindo!" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
