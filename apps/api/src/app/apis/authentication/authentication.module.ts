import { Module } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: 'User',
          schema: UserSchema
        }
      ]
    )
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
