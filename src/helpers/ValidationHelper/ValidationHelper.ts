import { FieldException } from '../../shared/exceptions/FieldException';
import { Validator } from './valitador.inteface';

class ValidationHelper implements Validator {
	async validate(requestBody: Object, validatorSchema: any, shouldCast: boolean): Promise<void> {
		const { error } = validatorSchema.validate(requestBody, { abortEarly: false, convert: shouldCast });
		if (error) {
			const formattedErrors = error.details.map((e) => e.message) as string[];
			throw new FieldException(formattedErrors);
		}
	}
}

export default new ValidationHelper();
