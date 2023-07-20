const { Schema, model, SchemaType } = require("mongoose");

const OrderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    orderData: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);
const Order = model("order", OrderSchema);
module.exports = Order;
