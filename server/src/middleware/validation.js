const validate = (schema, reqProperty) => (req, res, next) => {
  const { error } = schema.validate(req[reqProperty]);

  // there aren't any errors
  if (!error) {
    return next();
  }

  const { details } = error;
  const message = details.map(i => i.message).join(",");
  return res.status(422).json({
    error: message
  });
};

module.exports = {
  validate
};
