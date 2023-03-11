import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { User } from '../users/entities/user.entity';
import { PayloadToken } from '../auth/token.model';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string) {
    const user = await this.userService.findByUserName(userName);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      return user;
    }

    return null;
  }

  generateJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.id };
    delete user.password;
    return {
      access_toke: this.jwtService.sign(payload),
      user,
    };
  }
}
