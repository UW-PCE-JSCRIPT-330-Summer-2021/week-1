const { Router } = require("express");
const router = Router();

router.use("/items", require("./items"));
router.use("/", require("./items"))

module.exports = router;
