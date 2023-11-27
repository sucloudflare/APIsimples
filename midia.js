import express from "express";
import path from "path";
import { app, __dirname } from "./app";

// Servir arquivos estáticos dos diretórios dentro de 'public'
app.use("/images", express.static(path.join(__dirname, "public", "images")));
