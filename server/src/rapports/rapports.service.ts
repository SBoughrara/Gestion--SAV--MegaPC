import { Injectable } from '@nestjs/common';
import { CreateRapportDto } from './dto/create-rapport.dto';
import { UpdateRapportDto } from './dto/update-rapport.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RapportsService {
  constructor(private prisma: PrismaService) {}
  create(createRapportDto: CreateRapportDto) {
    return this.prisma.rapport.create({ data: createRapportDto });
  }

  findAll() {
    return this.prisma.rapport.findMany({
      include: { Ticket: { include: { Client: true } } },
    });

  }

  findOne(id: number) {
    return this.prisma.rapport.findUnique({
      where: { id },
      include: { Ticket: { include: { Client: true } } },
    });
  }

  update(id: number, updateRapportDto: UpdateRapportDto) {
    return this.prisma.rapport.update({
      where: { id },
      data: updateRapportDto,
    });
  }

  remove(id: number) {
    return this.prisma.rapport.delete({ where: { id } });
  }
}
