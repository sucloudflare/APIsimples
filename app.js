import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const app = express();

// Middleware para ler o corpo da requisição como JSON
app.use(express.json());

export default app;
