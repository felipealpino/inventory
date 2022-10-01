import Joi from 'joi';

export const createUserSchema = Joi.object({
	name: Joi.string().required(),
	password: Joi.string().required(),
	confirmPassword: Joi.string().required(),
});
