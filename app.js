const express = require("express");
const app = express();
const profileRouter = require("./router/profileRouter");
app.use(profileRouter);
app.listen(3000, () => {
  console.log("server is runnig on 3000");
});
