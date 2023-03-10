import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  create(data: CreateUserDto) {
    const newUser = this.userRepository.save(data);
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
    this.userRepository.merge(user, data);
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException(`User id: ${id} not Found`);
    }
    return this.userRepository.softDelete(id);
  }
}
