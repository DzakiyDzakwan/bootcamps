var express = require("express");
var router = express.Router();

//controller
const UserController = require("../controllers/users");

/* GET users listing. */
/* router.get("/", function (req, res, next) {
  res.send("respond with a resource");
}); */

router.get("/", UserController.findAll);

router.post("/register", UserController.register);

router.get("/:userId", function (req, res, next) {
  res.send(`respond with a resource, user id : ${req.params.userId}`);
});

module.exports = router;
