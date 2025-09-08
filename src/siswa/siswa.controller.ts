import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { Siswa } from './siswa.model';

@Controller('siswa')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Get()
  findAll() {
    return this.siswaService.findAll();
  }

  @Get(':nisn')
  findOne(@Param('nisn') nisn: string) {
    return this.siswaService.findOne(nisn);
  }

  @Post()
  create(@Body() siswa: Siswa) {
    return this.siswaService.create(siswa);
  }

  @Put(':nisn')
  update(@Param('nisn') nisn: string, @Body() data: Partial<Siswa>) {
    return this.siswaService.update(nisn, data);
  }

  @Delete(':nisn')
  remove(@Param('nisn') nisn: string) {
    return this.siswaService.remove(nisn);
  }
}
