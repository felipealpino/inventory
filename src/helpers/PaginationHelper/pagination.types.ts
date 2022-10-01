export interface PaginationResponse<T = any>{
	items: T[];
	totalItems: number;
	currentPage: number;
	totalPages: number;
}

export interface PaginationOptions {
	query?: string;
	page?: number | string;
	size?: number | string;
	order?: string;
	sort?: 'ASC' | 'DESC';
}



export type PaginatedQuery = (query: string, options?: Partial<PaginationOptions>) => Promise<PaginationResponse>;
