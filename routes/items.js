const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll());
});

router.get("/:id", (req, res, next) => {
  const item = itemDao.getById(req.params.id);
  if (!item)
    res.sendStatus(404);
  else
    res.json(item);
});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res, next) => {
  itemDao.updateById(req.params.id, req.body);
  res.sendStatus(200);
});

router.delete("/:id", (req, res, next) => {
  itemDao.deleteById(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
