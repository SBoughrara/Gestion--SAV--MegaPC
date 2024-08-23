import { ApiProperty } from '@nestjs/swagger';
import { garantie, statut,Status } from '@prisma/client';

export class CreateTicketDto {
  @ApiProperty()
  modele: string;
  @ApiProperty()
  num_serie: string;
  @ApiProperty()
  garantie: garantie;
  @ApiProperty()
  statut: statut;
  @ApiProperty()
  type: string;
  @ApiProperty()
  commentaire: string;
  @ApiProperty()
  clientId: number;
  @ApiProperty()
  status:Status
}
