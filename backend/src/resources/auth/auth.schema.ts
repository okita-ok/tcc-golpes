import Joi from "joi";

export const LoginDtoSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const SignupDtoSchema = Joi.object().keys({
  name: Joi.string().required().min(3).max(40),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(3).max(40),
});
