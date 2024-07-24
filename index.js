const express = require("express");
const userRoute = require("./src/routes/userRoute");

const app = express();
const port = 3000;

app.use(express.json());
// Utilizando rotas
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
