const express = require("express");
const connectDb = require("./db");
const userRouter = require("./Routes/user");
const displayRouter = require("./Routes/displayData");
const orderRouter = require("./Routes/order");
const app = express();
const port = 5000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept, user_email"
  );
  next();
});

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});
app.use("/api", userRouter);
app.use("/api", displayRouter);
app.use("/api", orderRouter);

const startServer = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log("App is listening to port 5000");
  });
};
startServer();
