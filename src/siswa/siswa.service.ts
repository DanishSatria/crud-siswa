import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Siswa } from './siswa.model';

@Injectable()
export class SiswaService {
  private siswa: Siswa[] = [
    { nisn: '12345', nama: 'Danish', alamat: 'Malang', umur: 17 },
  ];

  findAll(): Siswa[] {
    return this.siswa;
  }

  findOne(nisn: string): Siswa {
    const item = this.siswa.find(s => s.nisn === nisn);
    if (!item) {
      throw new NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
    }
    return item;
  }

  create(newSiswa: Siswa): Siswa {
    if (this.siswa.some(s => s.nisn === newSiswa.nisn)) {
      throw new BadRequestException(`NISN ${newSiswa.nisn} sudah ada`);
    }
    this.siswa.push(newSiswa);
    return newSiswa;
  }

  update(nisn: string, data: Partial<Siswa>): Siswa {
    const item = this.findOne(nisn);
    Object.assign(item, data);
    return item;
  }

  remove(nisn: string) {
    const index = this.siswa.findIndex(s => s.nisn === nisn);
    if (index === -1) {
      throw new NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
    }
    this.siswa.splice(index, 1);
  }
}
