const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll())
});

router.get("/:id", (req, res, next) => {
  let status = 404;

  if (itemDao.getById(req.params.id)) {
    res.json(itemDao.getById(req.params.id));
    status = 200;
  }

  res.sendStatus(status);

});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res, next) => {
  res.json(itemDao.updateById(req.params.id, req.body));
});

router.delete("/:id", (req, res, next) => {
  res.json(itemDao.deleteById(req.params.id));
});

module.exports = router;  

