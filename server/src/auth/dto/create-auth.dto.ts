import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateAuthDto {
    @ApiProperty()
    @IsString()
    password :string;
    @ApiProperty()
    @IsString()
    user_name :string;
    @ApiProperty()
    @IsEmail()
    email :string;
}        
