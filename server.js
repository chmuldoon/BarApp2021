const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const db = require("./config/keys").mongoURI;
const path = require("path");
const cookieParser = require('cookie-parser');
const handleErrors = require("./middleware/error");
const app = express();
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => {
    console.log(err)
    process.exit(1);
  })
app.use(express.json({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", require("./routes/api/auth"));

app.use("/api/cocktails", require("./routes/api/cocktails"));
app.use("/api/ingredients", require("./routes/api/ingredients"));



app.use(handleErrors)

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on ${process.env.PORT || 5000}`)
);