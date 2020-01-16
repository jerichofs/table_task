const Joi = require("@hapi/joi");

const addRowSchema = Joi.object({
  text: Joi.string().required()
});

module.exports = {
  addRowSchema
};
