var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//Router
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var karyawanRouter = require("./routes/karyawan");

//Controller
var KaryawanController = require("./controllers/karyawan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

/* Release 0 */
app.post("/register", KaryawanController.register);

/* Release 1 */
app.use("/karyawan", karyawanRouter);

/* Release 2 */
app.post("/login", KaryawanController.login);

module.exports = app;
