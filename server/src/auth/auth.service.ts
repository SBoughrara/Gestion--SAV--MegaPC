import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async login(Dto: CreateAuthDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: Dto.email },
          { user_name: Dto.user_name }
        ]
      },
      include: { Employee: true, Client: true },
    });
    if (!user) {
      throw new HttpException('invalid email or user name', HttpStatus.BAD_REQUEST);
    }
    const VPass = await bcrypt.compare(Dto.password, user.password);
    if (!VPass) {
      throw new HttpException('invalid passwod', HttpStatus.BAD_GATEWAY);
    }
    const { password, ...Urest } = user;
    const token = await this.jwtService.signAsync(Urest);
    return token;
  }
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
