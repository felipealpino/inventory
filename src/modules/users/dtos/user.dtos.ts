import { User } from '../interfaces/users.interface';

export type CreateUserDto = Omit<User, 'id'>;
export type EditUserDto = Partial<CreateUserDto>;
export type ListUserDto = Omit<User, 'password'>;
