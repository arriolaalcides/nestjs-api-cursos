import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { CreateCursoDto } from './dto/create-curso.dto';
//import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursosService {
  constructor(@InjectRepository(Curso) private CursoRepo: Repository<Curso>) {}

  /*create(createCursoDto: CreateCursoDto) {
    return 'This action adds a new curso';
  }*/
  create(body: any) {
    const newCurso = this.CursoRepo.create(body);
    return this.CursoRepo.save(newCurso);
  }

  findAll() {
    return this.CursoRepo.find();
  }

  findOne(id: number) {
    return this.CursoRepo.findOne(id);
  }

  /*update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }*/
  async update(id: number, body: any) {
    const curso = await this.CursoRepo.findOne(id);
    this.CursoRepo.merge(curso, body);
    return this.CursoRepo.save(curso);
  }

  async delete(id: number) {
    await this.CursoRepo.delete(id);
    return true;
  }
}
