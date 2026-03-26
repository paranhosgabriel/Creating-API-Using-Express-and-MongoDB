import autor from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
        // Get Livros
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({}).populate('autor');
            res.status(200).json(listaLivros);
            console.log("Get feito com sucesso"); //GET JSON
        } catch (erro) {
            res
                .status(500).json({ message: `${erro.message} - falha na requisição` });
                    console.log("Get erro 500"); //GET JSON
        }
    };
    // Fim get livros
// Get livros by ID
 static async listarLivroByID(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
            console.log("Get feito com sucesso"); //GET JSON
        } catch (erro) {
            res
                .status(500).json({ message: `${erro.message} - falha na requisição do Livro` });
                    console.log("Get erro 500 em listarLivroByID"); //GET JSON
        }
    };


// fIM GET Livros by ID


    // POST Livros
    static async cadastrarLivro(req, res) {
         const novolivro = req.body;
        try {

            if(!novolivro.autor){
                return res.status(400).json({ message: "ID do autor é obrigatório" });
            }
            const autorEncontrado =  await autor.findById(novolivro.autor);
            if(!autorEncontrado){
                return res.status(404).json({ message: "Autor não encontrado" });
            }

            const livroCompleto = { 
                ...novolivro, 
                autor: autorEncontrado
            };
            const livroCriado = await livro.create(livroCompleto);
            console.log('dados recebidos:', req.body);
           
             console.log('Livro Criado:', livroCriado);
            res.status(201).json({ message: 'Criado com sucesso', livro: livroCriado }); //responde a API com 201
                console.log("livro cadastrado com sucesso"); //POST JSON

        } catch (erro) {
             console.error('Erro detalhado:', erro);
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro` });
            console.log("Erro ao criar livro"); //POST JSON
        }
    }
    //Fim Criar Livros

    // Update Livro:

    static async updateLivro(req, res) {
        try {
            const id = req.params.id;
            console.log('Dados recebidos:', req.body);
         const livroAtualizado = await livro.findByIdAndUpdate(id,req.body, {new: true});
            if(!livroAtualizado){
                return res.status(404).json({message: "Livro não encontrado"});
            }
             console.log('Livro atualizado:',livroAtualizado);
            res.status(200).json({message: "Livro Atualizado", livro: livroAtualizado});
            console.log("Put feito com sucesso"); //PUT LIVRO
        } catch (erro) {
            res
                .status(500).json({ message: `${erro.message} - falha na requisição` });
                    console.log("Get erro 500"); // JSON
        }
    };

    //Fim Update

    // DeleteByID - dELETE
  static async deleteLivroByID(req, res) {
        try {
            const id_delete = req.params.id;
            console.log('Dados recebidos:', id_delete);
         const livrodelete = await livro.findByIdAndDelete(id_delete);
            if(!id_delete){
                return res.status(404).json({message: "Livro não encontrado"});
            }
             console.log('Livro deletado:',livrodelete);
            res.status(200).json({message: "Livro deletado", livro: livrodelete});
            console.log("Delete feito com sucesso"); //delete LIVRO
        } catch (erro) {
            res
                .status(500).json({ message: `${erro.message} - falha na requisição` });
                    console.log("delete erro 500"); // JSON
        }
    };

    // Fim DeleteByID

        //buscar livro Editora

        static async listarLivrosByEditora(req, res){
        const Editora = req.query.editora;
        console.log('Valor Editora: ', Editora);
            try{
             const livrosPorEditora = await livro.find({editora:Editora});
                res.status(200).json(livrosPorEditora);
                console.log(livrosPorEditora);
            }catch(erro){
                res
                .status(500).json({ message: `${erro.message} - falha na requisição` });
                    console.log("GET Editora erro 500"); // JSON
        }
            }
        };


export default LivroController;