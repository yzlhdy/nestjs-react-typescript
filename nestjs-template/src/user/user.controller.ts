import { Controller, Get, Post, Body, UsePipes, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from '../shared/validate.pipe';
import { AuthGuard } from 'src/shared/auth.guard';


@Controller()
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get('users')
    @UseGuards(new AuthGuard())
    showAllUser() {
        console.log('123');
        return this.userService.showAll()
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    login(@Body() data: UserDTO) {
        return this.userService.login(data)
    }

    @Post('register')
    @UsePipes(new ValidationPipe())
    register(@Body() data: UserDTO) {
        return this.userService.register(data)
    }
}
