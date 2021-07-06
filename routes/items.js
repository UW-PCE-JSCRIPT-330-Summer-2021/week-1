const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll())
});

router.get("/:id", (req, res, next) => {
  const id = itemDao.getById(req.params.id);
  if(id){
      res.send(id);
  }
  else res.sendStatus(404);
});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res, next) => {
  res.json(itemDao.updateById(req.params.id, req.body));
});

router.delete("/:id", (req, res, next) => {
  const id = itemDao.deleteById(req.params.id);
  res.json(id);
});

module.exports = router;
