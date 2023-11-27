import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware para ler o corpo da requisição como JSON
app.use(express.json());

// Servir arquivos estáticos dos diretórios dentro de 'public'
app.use("/images", express.static(path.join(__dirname, "public", "images")));
app.use("/styles", express.static(path.join(__dirname, "public", "styles")));
app.use("/scripts", express.static(path.join(__dirname, "public", "scripts")));

// Rota raiz
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "public", "hello.html");
  res.sendFile(filePath);
});

export default app;
