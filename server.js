//import http from "http";
import "dotenv/config";
import app   from "./src/app.js";
import routes from "./src/routes/livroRoutes.js";


const PORT = 3000; //porta local para acessar a API
/*
const rotas = {
    "/": "Curso de Express API",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
};

//Criando um objeto servidor
/*
const server =  http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
});

*/

app.listen(PORT,()=>{
console.log("servidor escutando! na porta",PORT);
});
