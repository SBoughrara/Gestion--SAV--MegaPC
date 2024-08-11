import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {
 
    @ApiProperty()
    first_name :string;
    @ApiProperty()
    last_name  :string;
    @ApiProperty()
    email      :string; 
    @ApiProperty()
    photo      :string;   
    @ApiProperty()
    adresse    :string;
    @ApiProperty()
    numero     :string;   
    
}
