import jwt from "jsonwebtoken";
import { secret } from "../index.js";

export default function middlewareAuth(req, res, next) {
  const authToken = req.headers["authorization"];
  console.log(authToken);

  if (authToken == undefined) {
    res.status(401);
    return res.json({ err: "1 Token inválido!" });
  }

  const bearer = authToken.split(" ");
  const token = bearer[1];

  jwt.verify(token, secret, (err, data) => {
    if (err) {
      res.status(401);
      return res.json({ err: "Token inválido!" });
    }

    req.token = token;
    req.loggerUser = { id: data.id, email: data.email };
    next();
  });
}
