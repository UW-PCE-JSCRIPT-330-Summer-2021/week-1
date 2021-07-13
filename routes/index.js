const { Router } = require('express');
const router = Router();
const morgan = require('morgan');

router.use(morgan('dev'));

router.use('/items', require('./items'));

router.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

router.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = router;
