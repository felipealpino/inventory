import { Router } from 'express';
import UsersController from '@/modules/users/controllers/users.controller';
import { Routes } from '@/routes/interfaces/routes.interface';

class UsersRoute implements Routes {
	public path = '/users';
	public router = Router();
	public usersController = new UsersController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}`, this.usersController.getUsers);
	}
}

export default UsersRoute;