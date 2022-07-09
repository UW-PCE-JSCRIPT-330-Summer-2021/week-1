const { Router } = require("express");
const router = Router();
const itemData = require('../dataInterface/items');

// This NPM Package aid in parsing the request body
const bodyParser = require('body-parser');
// router?app.use(something()) tells the server to use this function throug it
router.use(bodyParser())

router.get("/", (req, res, next) => {
  res.status(200).send(itemData.getAll())
});

router.get("/:id", (req, res, next) => {
  const queryExist = itemData.getById(req.params.id)
  if(queryExist){
    res.status(200).json(queryExist)
  }else{
    res.status(404).send({error: "not found"})
  }
});

router.post("/", (req, res, next) => {
  if(req.body.field != ""){
    itemData.create(req.body);
    res.sendStatus(200);
  }else{
    res.sendStatus(400)
  }

});

router.put("/:id", (req, res, next) => {
  const queryExist = itemData.getById(req.params.id)
  if(queryExist){
    if(req.body.field != ""){
    itemData.updateById(req.params.id, req.body)
    res.sendStatus(200)
    }else{
      res.sendStatus(400)
    }
  }else{
    res.status(200).send({error: "item does not exist"})
  }
});


router.delete("/:id", (req, res, next) => {
  const queryExist = itemData.getById(req.params.id)
  if(queryExist){
    itemData.deleteById(req.params.id)
    res.sendStatus(200)
  }else{
    res.status(404).send({error: "item does not exist"})
  }
});

module.exports = router;
