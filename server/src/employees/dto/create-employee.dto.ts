import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeDto {
    @ApiProperty()
    first_name :string; 
    @ApiProperty()
    last_name  :string;
    @ApiProperty()
    adresse    :string;
    @ApiProperty()
    numero     :string;
    @ApiProperty() 
    photo      :string; 
    @ApiProperty()
    email      :string; 
}
