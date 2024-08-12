import { ApiProperty } from "@nestjs/swagger";
import { garantie, statut } from "@prisma/client";

export class CreateTicketDto {
    @ApiProperty()
    modele      :string;
  num_serie   :string;
  garantie    :garantie;
  statut      :statut;
  type        :string;
  commentaire :string;
}
