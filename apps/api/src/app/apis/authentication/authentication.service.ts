import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '@panji-pakad/api-interfaces';
import * as bcrypt from 'bcrypt';
import { UserConstants } from '../../utils/user.constants';
import { UserModel } from './user.schema';

@Injectable()
export class AuthenticationService {

  constructor(@InjectModel('User') private readonly userModel: Model<UserModel>) { }

  async registerUser(user: User): Promise<UserModel> {
    try {
      user.password = await bcrypt.hash(user.password, UserConstants.PASSWORD_SALT_ROUNDS)
      const registeredUserModel: UserModel = new this.userModel({
        username: user.username,
        password: user.password,
        email: user.email,
        name: user.name
      });
      const registeredUser: UserModel = await registeredUserModel.save();
      return registeredUser;
    } catch (error) {
      throw new InternalServerErrorException('Error in registering user')
    }
  }

  async authenticateUser(user: User): Promise<UserModel> {
    let dbUser: UserModel;
    // get user details from database
    try {
      dbUser = await this.userModel.findOne({ username: user.username }).exec();
    } catch (error) {
      throw new BadRequestException('Invalid Username')
    }

    // check if username exists in database
    if (!dbUser) {
      throw new BadRequestException('Invalid Username')
    }
    const isPasswordValid = await bcrypt.compare(user.password, dbUser.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid Password')
    }
    return dbUser;
  }
}
