import {
  Controller,
  Get,
  Post,
  Body,
  //Patch,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CursosService } from './../service/cursos.service';
//import { CreateCursoDto } from './dto/create-curso.dto';
//import { UpdateCursoDto } from './dto/update-curso.dto';

@UseGuards(JwtAuthGuard)
@Controller('api/cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  /*@Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.create(createCursoDto);
  }*/
  @Post()
  create(@Body() body: any) {
    return this.cursosService.create(body);
  }

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cursosService.findOne(id);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursosService.update(+id, updateCursoDto);
  }*/
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.cursosService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.cursosService.delete(id);
  }
}
