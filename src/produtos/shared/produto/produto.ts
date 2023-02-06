import { Document } from "mongoose";

export class Produto extends Document{
    position:number;
    titulo: string;
    preco: number;
    categoria: string;
    descricao: string;
}
