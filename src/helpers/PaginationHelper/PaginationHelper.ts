import Joi, { AnySchema } from 'joi';
import { PaginationOptions, PaginationResponse } from './pagination.types';

export class PaginationHelper {
	static getSearchSchema(options?: { [key: string]: AnySchema }): Joi.ObjectSchema<any> {
		return Joi.object({
			query: Joi.string().optional().allow(''),
			page: Joi.number().optional(),
			size: Joi.number().optional(),
			order: Joi.string().optional(),
			sort: Joi.string().valid('ASC', 'DESC').optional(),
			...options,
		});
	}

	static getPagination(options: PaginationOptions) {
		let { size, page } = options;
		const limit = size ? +size : 15;
		const offset = page ? +page * limit : 0;
		return { limit, offset, page: page ? +page : 0 };
	}

	static getOrder(order: string, sort?: 'ASC' | 'DESC') {
		return { [order]: sort ? sort : 'ASC' };
	}

	static formatData<T>(data: [T[], number], limit: number, page?: number | string): PaginationResponse {
		const [rows, count] = data;
		const currentPage = page ? +page : 0;
		const totalPages = Math.ceil(count / limit);
		return { totalItems: count, items: rows, totalPages, currentPage };
	}
}
