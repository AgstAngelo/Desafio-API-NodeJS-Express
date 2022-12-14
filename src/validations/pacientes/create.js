const { validate, joi, Joi } = require('express-validation');

module.exports = validate({
  body: Joi.object(
    {
      nome: Joi.string().required(),
      email: Joi.email().required(),
      idade: Joi.date(),
    }
  )
})