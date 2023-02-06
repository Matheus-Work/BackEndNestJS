import { Injectable } from '@nestjs/common';
import { Produto } from '../produto/produto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProdutoService {
    constructor(@InjectModel('Produto') private readonly produtoModel: Model<Produto>) { }
    async getAll(){
        return await this.produtoModel.find().exec();
    }

    async getById(id:number){
        return await this.produtoModel.findById(id).exec();
    }

    async create(produto: Produto) {
        const createdProduto = new this.produtoModel(produto);
        return await createdProduto.save();
    }

    async update(id:number, produto: Produto){
        await this.produtoModel.updateOne({ _id: id }, produto).exec();
        return this.getById(id);
    }

    async delete(id:number){
        return await this.produtoModel.deleteOne({_id: id}).exec();
    }
}
