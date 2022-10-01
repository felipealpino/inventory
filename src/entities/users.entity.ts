import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { User } from '@/modules/users/interfaces/users.interface';

@Entity({ name: 'users', schema: 'inventory' })
export class UserEntity extends BaseEntity implements User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@Unique(['email'])
	email: string;

	@Column({ select: false })
	password: string;

	@Column()
	@CreateDateColumn()
	created_at: Date;

	@Column()
	@UpdateDateColumn()
	updated_at: Date;

	@Column()
	@DeleteDateColumn()
	deleted_at: Date;
}
