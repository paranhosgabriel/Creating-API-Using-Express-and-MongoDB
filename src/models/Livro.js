import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        titulo: {type: mongoose.Schema.Types.String},
        editora: {type: mongoose.Schema.Types.String},
        preco: {type: mongoose.Schema.Types.Number},
        paginas: {type: mongoose.Schema.Types.Number},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true}
    }, {versionKey: false});


   const livro = mongoose.model('livros',livroSchema);
   export default livro; 