import { Repository } from 'typeorm';
import { UserEntity } from '@entities/users.entity';
import { User } from '@interfaces/users.interface';

class UserService extends Repository<UserEntity> {
	public async findAllUser(): Promise<User[]> {
		const users: User[] = await UserEntity.find();
		return users;
	}
}

export { UserService };