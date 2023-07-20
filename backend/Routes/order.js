const { Router } = require("express");
const Order = require("../model/order");

const router = Router();

router.post("/orderData", async (req, res) => {
  const data = req.body.order_data;

  await data.splice(0, 0, { Order_date: req.body.order_date });
  //   console.log("order_data", req.body.order_data);
  //   console.log("data", data);
  const eId = await Order.findOne({ email: req.body.email });
  //   console.log("checking eId:", eId);
  if (!eId) {
    try {
      const test = await Order.create({
        email: req.body.email,
        orderData: [data],
      });
      //   console.log(test);
      return res.json({ success: true });
    } catch (error) {
      //   console.log(error);
      return res.json({ "server error": error.message });
    }
  }
  try {
    await Order.findOneAndUpdate(
      { email: req.body.email },
      {
        $push: { orderData: data },
      }
    );
    return res.json({ success: true });
  } catch (error) {
    return res.json({ "server error": error.message });
  }
});

router.get("/myOrderData", async (req, res) => {
  try {
    console.log(req.headers.user_email);
    const data = await Order.findOne({ email: req.headers.user_email });
    return res.send({
      orderData: data.orderData,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
});
module.exports = router;
