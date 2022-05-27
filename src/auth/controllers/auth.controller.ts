import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  /*login(@Req() req: Request) {
      const user = req.user as User;
      return this.authService.generateJWT(user.username);
  }*/
  login(@Body() user: User) {
    return this.authService.generateJWT(user.username);
  }
}
