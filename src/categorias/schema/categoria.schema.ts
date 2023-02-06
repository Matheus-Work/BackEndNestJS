import * as mongoose from 'mongoose';

export const CategoriaSchema = new mongoose.Schema({
    position: Number,
    nome: String,
    data_criacao: String,
    descricao: String
})
