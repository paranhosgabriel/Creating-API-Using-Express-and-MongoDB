import express from "express";
import LivroController  from "../controllers/livroController.js";
import app from "../app.js";

const routes = (app)=>{
app.get("/livros",LivroController.listarLivros);
app.post("/livros",LivroController.cadastrarLivro);
app.get("/livros/editora",LivroController.listarLivrosByEditora);
app.get("/livros/:id",LivroController.listarLivroByID);
app.put("/livros/:id",LivroController.updateLivro);
app.delete("/livros/:id",LivroController.deleteLivroByID);

}
export default routes;