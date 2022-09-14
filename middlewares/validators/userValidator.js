const {check, validationResult} = require('express-validator');

exports.validateUser = [
  check('nombre')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!')
    .bail()
    .isLength({min: 3})
    .withMessage('Minimum 3 characters required!')
    .bail(),
  check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Invalid email address!')
    //.normalizeEmail()
    .bail(),
  check('pass')
    .trim()
    //.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
    .not()
    .isEmpty()
    .withMessage('Invalid password!')
    .bail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];