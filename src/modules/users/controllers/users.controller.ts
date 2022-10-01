import { Request, Response } from 'express';
import { User } from '@/modules/users/interfaces/users.interface';
import { UserService } from '../services/users.service';

class UsersController {
	public userService = new UserService();

	public getUsers = async (req: Request, res: Response): Promise<void> => {
		try {
			const findAllUsersData: User[] = await this.userService.findAllUser();

			res.status(200).json({ data: findAllUsersData, message: 'findAll' });
		} catch (error) {
			console.log(`error =>> `, error.messsage);
			res.status(500).json({ message: error.message });
		}
	};
}

export default UsersController;
