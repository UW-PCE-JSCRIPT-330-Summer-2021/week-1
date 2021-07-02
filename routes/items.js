const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll())
});

router.get("/:id", (req, res, next) => {
  const exsist = itemDao.items.some(item => item.id === req.params.id);
  if (exsist) {
    res.json(itemDao.getById(req.params.id))
  } else {
    res.sendStatus(404)
  }
});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res, next) => {
  const exsist = itemDao.items.some(item => item.id === req.params.id);
  if (exsist) {
    itemDao.updateById(req.params.id, req.body);
    res.sendStatus(200);
  } else {
    res.end();
  }
});

router.delete("/:id", (req, res, next) => {
  itemDao.deleteById(req.params.id)
  res.sendStatus(200);
});

module.exports = router;
