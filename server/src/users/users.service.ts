import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;
    const salt = await bcrypt.genSalt();
    const Hpass = await bcrypt.hashSync(password, salt);
    return await this.prisma.user.create({
      data: { ...rest, password: Hpass },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
