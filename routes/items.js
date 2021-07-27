const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {

  res.json(itemDao.getAll())
});

router.get("/:id", (req, res, next) => {
  
const itemId = itemDao.getById(req.params.id);
  if (itemId == null) {
    return res.status(404).send("Error: Items not available")
  }
  res.json(itemId);
  next;
});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
  next;
});

router.put("/:id", (req, res, next) => {
  const requestBody = {...req.body};
  const itemId = itemDao.getById(req.params.id);
  if (itemId != null) {
    
    itemDao.updateById(req.params.id, requestBody);
  }
  res.sendStatus(200);
  next;
});

router.delete("/:id", (req, res, next) => {
  itemDao.deleteById(req.params.id);
  res.sendStatus(200);
  next;
});

module.exports = router;
