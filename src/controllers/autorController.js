
import autor from "../models/Autor.js";

class AutorController {
        // Get autor
    static async listarAutor(req, res) {
        try {
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);
            console.log("Get Autor feito com sucesso"); //GET JSON
        } catch (erro) {
            res
                .status(500).json({ message: `${erro.message} - falha na requisição` });
                    console.log("Get Autor erro 500"); //GET JSON
        }
    };
    // Fim get livros
// Get livros by ID
 static async listarAutorByID(req, res) {
        try {
            const idAutor = req.params.id;
            console.log('ID Autor GET',idAutor);
            const autorEcontrado = await autor.findById(idAutor);
            res.status(200).json(autorEcontrado);
            console.log("Get Autor by ID feito com sucesso"); //GET JSON
        } catch (erro) {
            res
                .status(500).json({ message: `${erro.message} - falha na requisição do Livro` });
                    console.log("Get erro 500 em listarAutorByID"); //GET JSON
        }
    };


// fIM GET Livros by ID

 // POST Autor
    static async cadastrarAutor(req, res) {
        try {
            console.log('dados recebidos:', req.body);
            const novoautor = await autor.create(req.body);
             console.log('Autor Criado:', novoautor);
            res.status(201).json({ message: 'Criado com sucesso', autor: novoautor }); //responde a API com 201
                console.log("autor cadastrado com sucesso"); //POST JSON

        } catch (erro) {
             console.error('Erro detalhado:', erro);
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar autor` });
            console.log("Erro ao criar autor"); //POST JSON
        }
    }
    //Fim Criar Livros

    // Update Livro:

    static async updateAutor(req, res) {
        try {
            const IdUpdateAutor = req.params.id;
            console.log('Dados recebidos:', req.body);
         const autorAtualizado = await autor.findByIdAndUpdate(IdUpdateAutor,req.body, {new: true});
            if(!autorAtualizado){
                return res.status(404).json({message: "Autor não encontrado"});
            }
             console.log('Autor atualizado:',autorAtualizado);
            res.status(200).json({message: "Autor Atualizado", autor: autorAtualizado});
            console.log("Put Autor feito com sucesso"); //PUT Autor
        } catch (erro) {
            res
                .status(500).json({ message: `${erro.message} - falha na requisição` });
                    console.log("Get erro Autor 500"); // JSON
        }
    };

    //Fim Update

    // DeleteByID - dELETE
  static async deleteAutorByID(req, res) {
        try {
            const id_delete_autor = req.params.id;
            console.log('Dados recebidos:', id_delete_autor );
         const autorDelete = await autor.findByIdAndDelete(id_delete_autor );
            if(!id_delete_autor ){
                return res.status(404).json({message: "Autor não encontrado"});
            }
             console.log('Autor deletado:',autorDelete);
            res.status(200).json({message: "Autor deletado", autor: autorDelete});
            console.log("Delete feito com sucesso"); //delete Autor
        } catch (erro) {
            res
                .status(500).json({ message: `${erro.message} - falha na requisição` });
                    console.log("delete autor erro 500"); // JSON
        }
    };

    // Fim DeleteByID


};

export default AutorController;
