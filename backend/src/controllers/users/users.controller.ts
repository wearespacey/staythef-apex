import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(){
    }

    @Get()
    getUsers(){
        return 'JPP PTN';
    }
}
