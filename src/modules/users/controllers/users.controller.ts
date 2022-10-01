import { Request, Response } from 'express';
import { UserRepository } from '../repositories/users.repository';
import { PaginationHelper } from '@/helpers/PaginationHelper/PaginationHelper';
import ValidationHelper from '@/helpers/ValidationHelper/ValidationHelper';

class UsersController {
	public userRepository = new UserRepository();

	public listUsers = async (req: Request, res: Response): Promise<void> => {
		try {
			const stringParams = req.query ? req.query : {};
			const listUsersSchema = PaginationHelper.getSearchSchema();
			await ValidationHelper.validate(stringParams, listUsersSchema, true);

			const response = await this.userRepository.listUsersPaginated(stringParams);
			res.status(200).json(response);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	};
}

export default UsersController;
