import { Controller, Post, Body } from '@nestjs/common';

import { User, APIResponse } from '@panji-pakad/api-interfaces';
import { AuthenticationService } from './authentication.service';
import { UserModel } from './user.schema';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email: string,
    @Body('name') name: string
  ): Promise<APIResponse<User>> {
    const user: User = {
      username,
      password,
      email,
      name
    };
    const registeredUser: UserModel = await this.authenticationService.registerUser(user);
    return {
      message: 'User Registered Successfully',
      result: {
        id: registeredUser.id,
        username: registeredUser.username,
        email: registeredUser.email,
        name: registeredUser.name
      }
    };
  }

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string): Promise<APIResponse<User>> {
    const user: User = {
      username,
      password
    };
    const dbUser: UserModel = await this.authenticationService.authenticateUser(user);
    return {
      statusCode: 200,
      message: 'Log in Successful',
      result: {
        id: dbUser.id,
        username: dbUser.username,
        email: dbUser.email,
        name: dbUser.name
      }
    };
  }
}