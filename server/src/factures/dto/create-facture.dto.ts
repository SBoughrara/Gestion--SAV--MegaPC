import { ApiProperty } from "@nestjs/swagger";
import { StatutP } from "@prisma/client";

export class CreateFactureDto {
    @ApiProperty()
    statut  : StatutP;
    @ApiProperty()
    montant  :number;
}
