import * as mongoose from 'mongoose';

export const ProdutoSchema = new mongoose.Schema({
    position: Number,
    titulo: String,
    preco: Number,
    categoria: String,
    descricao: String
})
