import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dbProjeto:1234@cluster0.shlxylk.mongodb.net/?retryWrites=true&w=majority'),
  ProdutosModule,
  CategoriasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
