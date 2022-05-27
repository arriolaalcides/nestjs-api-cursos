import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AlumnosService } from './alumnos.service';
/*import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';*/

@UseGuards(JwtAuthGuard)
@Controller('api/alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  /*@Post()
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnosService.create(createAlumnoDto);
  }*/
  @Post()
  create(@Body() body: any) {
    return this.alumnosService.create(body);
  }

  @Public()
  @Get()
  findAll() {
    return this.alumnosService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alumnosService.findOne(id);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnoDto: UpdateAlumnoDto) {
    return this.alumnosService.update(+id, updateAlumnoDto);
  }*/
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.alumnosService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.alumnosService.delete(id);
  }
}
