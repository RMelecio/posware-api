import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(data: CreateUserDto) {
    data.password = await bcrypt.hash(data.password, 10);
    const newUser = this.userRepository.save(data);
    delete (await newUser).password;
    return newUser;
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException(`User id: ${id} not Found`);
    }
    return user;
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException(`User id: ${id} not Found`);
    }
    data.password = await bcrypt.hash(data.password, 10);
    this.userRepository.merge(user, data);
    const newUser = this.userRepository.save(user);
    return newUser;
  }

  async remove(id: number) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException(`User id: ${id} not Found`);
    }
    return this.userRepository.softDelete(id);
  }

  async findByUserName(userName: string) {
    const user = await this.userRepository.findOneBy({ user_name: userName });
    if (!user) {
      throw new NotFoundException(`User: ${userName} not Found`);
    }
    return user;
  }
}
