const { Router } = require('express');
const Reviewer = require('../models/Reviewer');

module.exports = Router()

  .post('/', (req, res, next) => {
    const { name, company } = req.body;
    Reviewer
      .create({
        name,
        company
      })
      .then(reviewer => res.send(reviewer))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Reviewer
      .find()
      .select('-__v')
      .then(reviewers => res.send(reviewers))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Reviewer 
      .findById(req.params.id)
      .select('-__v')
      .then(reviewer => res.send(reviewer))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const { name, company } = req.body;
    Reviewer
      .findByIdAndUpdate(req.params.id, { name, company }, { new: true })
      .select('-__v')
      .then(reviewer => res.send(reviewer))
      .catch(next);
  });
