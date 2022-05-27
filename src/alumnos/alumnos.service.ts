import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/*import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';*/
import { Alumno } from './entities/alumno.entity';

@Injectable()
export class AlumnosService {
  constructor(
    @InjectRepository(Alumno) private alumnoRepo: Repository<Alumno>,
  ) {}
  /*create(createAlumnoDto: CreateAlumnoDto) {
    return 'This action adds a new alumno';
  }*/
  create(body: any) {
    const newAlumno = this.alumnoRepo.create(body);
    return this.alumnoRepo.save(newAlumno);
  }

  findAll() {
    return this.alumnoRepo.find();
  }

  findOne(id: number) {
    return this.alumnoRepo.findOne(id);
  }

  /*update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }*/
  async update(id: number, body: any) {
    const curso = await this.alumnoRepo.findOne(id);
    this.alumnoRepo.merge(curso, body);
    return this.alumnoRepo.save(curso);
  }

  async delete(id: number) {
    await this.alumnoRepo.delete(id);
    return true;
  }
}
