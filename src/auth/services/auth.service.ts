import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PayloadToken } from '../models/token.model';
//import { User } from '../models/user.model';
import { UsersService } from '../../users/service/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    /*const users: User[] = [
      {
        username: 'alcides.arriola',
        password: '123456',
        role: 'admin',
        id: 1,
      },
    ];
    const user: User = users.find(
      (x) => x.username === username && x.password === password,
    );
    if (user) return user;

    return null;
    */

    const user = await this.usersService.findByEmail(username);
    return await user.validatePassword(password);
  }

  /*generateJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }*/

  async generateJWT(name: string): Promise<any> {
    const user = await this.usersService.findByEmail(name);
    const payload: PayloadToken = { role: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
