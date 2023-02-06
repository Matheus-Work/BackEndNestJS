import { Document } from "mongoose";

export class Categoria extends Document{
    position:number;
    nome: string;
    data_criacao: String;
    descricao: string;
}
