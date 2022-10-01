export class FieldException extends Error {
	statusCode: number;
	constructor(errors: string[]) {
		super();
		this.message = JSON.stringify(errors);
		this.statusCode = 400;
	}
}