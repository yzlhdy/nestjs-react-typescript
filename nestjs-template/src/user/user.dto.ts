import { IsNotEmpty, IsString } from "class-validator";

export class UserDTO {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}

export class UserRo {
    id: number;
    username: string;
    // password: string;
    create: Date;
    token?: string;
}