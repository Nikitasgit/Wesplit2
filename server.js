const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5001;
const cors = require("cors");

connectDB();

const app = express();

//Authorisation CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    creedientials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/group", require("./routes/group.routes"));
app.use("/post", require("./routes/post.routes"));
app.use("/user", require("./routes/user.routes"));

app.listen(port, () => console.log("Le serveur a démarré au port " + port));
