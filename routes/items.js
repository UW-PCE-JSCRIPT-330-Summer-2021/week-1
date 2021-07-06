const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll());
});

router.get("/:id", (req, res, next) => {
  let item = itemDao.getById(req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.sendStatus(404);
  }
  res.json();
});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.delete("/:id", (req, res, next) => {
  const deleteItem = itemDao.deleteById(req.params.id);
  res.json(deleteItem);
});

router.put("/:id", (req, res, next) => {
  res.json(itemDao.updateById(req.params.id, req.body));
});

module.exports = router;
