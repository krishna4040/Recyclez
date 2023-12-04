const express = require("express");
require("dotenv").config();
const router = require("./router/router");
const { dbConnect } = require("./config/dbConnect");
const { cdConnect } = require("./config/cdConnect");
const expressFileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
dbConnect();
cdConnect();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  expressFileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/",
  })
);
app.use("/api/v1", router);

app.listen(process.env.PORT, () => console.log("app listning succsesfully"));
app.get("/", (req, res) => res.send("<h1>Home page for api</h1>"));
