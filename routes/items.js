const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll())
});

router.get("/:id", (req, res, next) => {
  const rez = itemDao.getById(req.params.id);
  if(rez){
    res.send(rez);
  } else {
    res.sendStatus(404);
  }

});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res, next) => {
  // TODO: complete this route
  res.json(itemDao.updateById(req.params.id, req.body));  
});

router.delete("/:id", (req, res, next) => {
  // TODO: complete this route
   res.json(itemDao.deleteById(req.params.id));
});

module.exports = router;
