import { Repository } from 'typeorm';
import { UserEntity } from '@entities/users.entity';
import { User } from '@/modules/users/interfaces/users.interface';
import { Database } from '@/database/database';

class UserService extends Repository<UserEntity> {
	public async findAllUser(): Promise<User[]> {
		const conn = await Database.connect();
		const userRepo = conn.getRepository(UserEntity);
		const users: User[] = await userRepo.find();
		return users;
	}
}

export { UserService };
