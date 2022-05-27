/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
//import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    });
  }

  async validate(username: string, password: string) {
    /*const user: User = await this.authService.validateUser(username, password);
    if (!user) throw new UnauthorizedException('Not Allowed');
    return user;*/

    const user = await this.authService.validateUser(username, password);
    if (!user) throw new UnauthorizedException('Not Allowed');
    return user;
  }
}
