const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000

require("./config/dbConnect");

const app = express();
app.use(express.json());
app.use(cors())

app.use("/todos", require("./routers/todoRouter"));

app.listen(PORT, () => console.log(`Server running Port ${PORT}`));
