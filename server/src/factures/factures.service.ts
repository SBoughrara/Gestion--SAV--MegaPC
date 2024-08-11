import { Injectable } from '@nestjs/common';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
import { PrismaService } from 'nestjs-prisma';
import { CreateEmployeeDto } from 'src/employees/dto/create-employee.dto';

@Injectable()
export class FacturesService {
  constructor(private prisma: PrismaService) {}
  create(createFactureDto: CreateFactureDto) {
    return this.prisma.facture.create({ data: createFactureDto });
  }

  findAll() {
    return this.prisma.facture.findMany();
  }

  findOne(id: number) {
    return this.prisma.facture.findUnique({ where: { id } });
  }

  update(id: number, updateFactureDto: UpdateFactureDto) {
    return this.prisma.facture.update({
      where: { id },
      data: updateFactureDto,
    });
  }

  remove(id: number) {
    return this.prisma.facture.delete({ where: { id } });
  }
}
