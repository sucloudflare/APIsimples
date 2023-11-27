import express from "express";
import path from "path";
import { app, __dirname } from "./app";

app.use("/styles", express.static(path.join(__dirname, "public", "styles")));
