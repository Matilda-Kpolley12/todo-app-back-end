const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/todos", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database working successfully"))
  .catch((err) => console.log(err.message));
