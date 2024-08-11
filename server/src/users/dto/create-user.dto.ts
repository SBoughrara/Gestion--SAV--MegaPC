import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    password :string;
    @ApiProperty()
    @IsString()
    user_name:string;
    @ApiProperty()
    @IsEmail()
    email :string
}
