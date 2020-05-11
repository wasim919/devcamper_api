const express = require('express');
const router = express.Router();
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');
const { check, validationResult } = require('express-validator');

router
  .route('/')
  .get(getBootcamps)
  .post(
    [
      check('name', 'Name must not be greater than 50 characters')
        .not()
        .isEmpty()
        .isLength({ max: 50 }),
      check('address', 'Address must be present').not().isEmpty(),
    ],
    createBootcamp
  );

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
