import express, { Router } from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/livroRoutes.js";
import AutorRoutes from "./routes/autoresRoutes.js";


// PRIMEIRO: cria o app
const app = express();
app.use(express.json());
console.log('✅ express.json() configurado');
//routes(app) chmando a função routes de livroRoutes;
routes(app);
//routes(app) chmando a função routes de autoresRoutes;
AutorRoutes(app);
const conexao = await conectaNaDatabase();

conexao.on('error',(erro)=>{
console.error('erro de conexão',erro);

});

conexao.once('open',()=>{
console.log('Conexão com o banco feita com sucesso');
});

app.get("/livros/:id", (req,res)=>{
const index = listarLivroByID(req.params.id);
res.status(200).json(index);
});

app.delete("/livros/:id", (req,res)=>{
const deleteLivro = deleteLivroByID(req.params.id);
res.status(200).json(deleteLivro);
});

export default app;

