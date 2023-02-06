import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { ProdutoService } from './shared/produto.service/produto.service';
import { Produto } from './shared/produto/produto';
import { ProdutoSchema } from './schemas/produto.schema';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Produto', schema: ProdutoSchema }])
    ],
    controllers:[ProdutosController],
    providers:[ProdutoService]
})
export class ProdutosModule {}