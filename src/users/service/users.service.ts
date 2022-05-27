import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private UseRepo: Repository<User>) {}

  findAll() {
    return this.UseRepo.find();
  }

  findOne(id: number) {
    return this.UseRepo.findOne(id);
  }

  create(body: any) {
    const newUser = this.UseRepo.create(body);
    return this.UseRepo.save(newUser);
  }

  async update(id: number, body: any) {
    const user = await this.UseRepo.findOne(id);
    this.UseRepo.merge(user, body);
    return this.UseRepo.save(user);
  }

  async delete(id: number) {
    await this.UseRepo.delete(id);
    return true;
  }

  async findByEmail(email: string) {
    return await this.UseRepo.createQueryBuilder('user')
      .where({ email })
      .addSelect('user.password')
      .getOne();
  }
}
