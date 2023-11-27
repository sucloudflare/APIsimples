import path from "path";
import { app, __dirname } from "./app";

// Rota raiz
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "public", "hello.html");
  res.sendFile(filePath);
});
