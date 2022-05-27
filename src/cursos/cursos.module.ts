import { Module } from '@nestjs/common';
import { CursosService } from './service/cursos.service';
import { CursosController } from './controllers/cursos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
