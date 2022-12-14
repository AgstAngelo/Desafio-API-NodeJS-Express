const { validate, joi, Joi } = require('express-validation');

module.exports = validate({
  body: Joi.object(
    {
      paciente: Joi.integer().required(),
      psicologo: Joi.integer().required(),
      data_atendimento: Joi.date().required(),
      observacao: Joi.string().required()
    }
  )
})