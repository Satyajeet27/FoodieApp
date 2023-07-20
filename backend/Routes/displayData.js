const { Router } = require("express");

const router = Router();

router.get("/foodData", (req, res) => {
  try {
    // console.log();
    res.send([global.foodData, global.foodCategory]);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
