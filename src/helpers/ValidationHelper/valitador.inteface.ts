export interface Validator {
	validate(requestBody: Object, validatorSchema: any, shouldCast: boolean): Promise<void>;
}
