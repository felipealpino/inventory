import { Repository, SelectQueryBuilder } from 'typeorm';
import { UserEntity } from '@entities/users.entity';
import { Database } from '@/database/database';
import { PaginationOptions, PaginationResponse } from '@/helpers/PaginationHelper/pagination.types';
import { PaginationHelper } from '../../../helpers/PaginationHelper/PaginationHelper';
import { ListUserDto } from '../dtos/user.dtos';

class UserRepository extends Repository<UserEntity> {
	public async listUsersPaginated(options: Partial<PaginationOptions>): Promise<PaginationResponse<ListUserDto>> {
		const conn = await Database.connect();
		const userRepo = conn.getRepository(UserEntity);
		const qbuilder = userRepo.createQueryBuilder();
		this.listUsersCreateWhere(qbuilder, options);

		const { limit, offset, page } = PaginationHelper.getPagination(options);
		qbuilder.take(limit).skip(offset);
		if (options.order) qbuilder.orderBy(options.order, options.sort ? options.sort : 'ASC');

		const res = await qbuilder.getManyAndCount();
		return PaginationHelper.formatData<UserEntity>(res, limit, page);
	}

	listUsersCreateWhere(qbuilder: SelectQueryBuilder<UserEntity>, options: Partial<PaginationOptions>) {}
}

export { UserRepository };
