import { ApiProperty } from "@nestjs/swagger";
import { Ticket } from "@prisma/client";

export class CreateRapportDto {
    @ApiProperty()
  contenu  :string;

}
