import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './employees/employees.module';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { TicketsModule } from './tickets/tickets.module';
import { FacturesModule } from './factures/factures.module';
import { RapportsModule } from './rapports/rapports.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    PrismaModule.forRoot({ isGlobal: true }),
    AuthModule,
    EmployeesModule,
    UsersModule,
    ClientsModule,
    TicketsModule,
    FacturesModule,
    RapportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
