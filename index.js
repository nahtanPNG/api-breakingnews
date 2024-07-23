const express = require("express");
const userRoute = require("./src/routes/userRoute");

const app = express();

// Utilizando rotas
app.use("/dev", userRoute);

app.listen(3000);
