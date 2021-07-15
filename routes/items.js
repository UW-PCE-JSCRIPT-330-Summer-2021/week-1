const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll())
});

router.get("/:id", (req, res, next) => {
  const itemId = itemDao.getById(req.params.id);

  if (itemId) {
    res.json(itemId);
    res.send(itemId)
    

} else {
  res.sendStatus(404);
}
 res.json();
});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res, next) => {
  // TODO: complete this route
  res.json(itemDao.updateById(req.params.id, req.body));
 // res.sendStatus(501);
});

router.delete("/:id", (req, res, next) => {
  // TODO: complete this route
  res.json(itemDao.deleteById(req.params.id))
  //res.sendStatus(200);
});

module.exports = router;
