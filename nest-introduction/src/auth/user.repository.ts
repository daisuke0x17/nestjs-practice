import { User } from 'src/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const { userName, password, status } = CreateUserDto;
    const user = this.create({ userName, password, status });

    await this.save(user);
    return user;
  }
}
