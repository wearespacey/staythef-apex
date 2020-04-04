import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(){
        console.log('User controller');
    }

    @Get()
    getUsers(){
        return 'JPP PTN';
    }
}
