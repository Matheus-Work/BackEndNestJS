import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutoService } from './shared/produto.service/produto.service';
import { Produto } from './shared/produto/produto';

@Controller('Produtos')
export class ProdutosController {
    constructor(private produtoService: ProdutoService){ }
    @Get()
    async getAll(): Promise<Produto[]>{
        return this.produtoService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id:number): Promise<Produto>{
        return this.produtoService.getById(id);
    }

    @Post()
    async create(@Body() produto: Produto) : Promise<Produto> {
        return this.produtoService.create(produto);
    }    

    @Put(':id')
    async update(@Param('id') id:number, @Body() produto: Produto) : Promise<Produto> {
        return this.produtoService.update(id, produto);
    }

    @Delete(':id')
    async delete(@Param('id') id:number) {
        this.produtoService.delete(id);
    }

}
