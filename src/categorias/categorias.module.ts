import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriaService } from './shared/categoria.service/categoria.service';
import { Categoria } from './shared/categoria/categoria';
import { CategoriaSchema } from './schema/categoria.schema';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Categoria', schema: CategoriaSchema }])
    ],
    controllers:[CategoriasController],
    providers:[CategoriaService]
})
export class CategoriasModule {}