const { Router } = require('express');
const router = Router();

const itemDao = require('../daos/items');

router.get('/', (req, res, next) => {
  res.json(itemDao.getAll());
});

router.get('/:id', (req, res, next) => {
  // TODO: complete this route
  const { id } = req.params;
  res.json(itemDao.getById(id));
  res.sendStatus(200);
});

router.post('/', (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put('/:id', (req, res, next) => {
  // TODO: complete this route
  const { id } = req.params;

  res.json(itemDao.updateById(id, req.body));
  
  // res.sendStatus(200);
});

router.delete('/:id', (req, res, next) => {
  // TODO: complete this route
  const { id } = req.params;
  res.json(itemDao.deleteById(id));
  res.send(`item  frute deteted ${id}`);
  res.sendStatus(200);
});

module.exports = router;
