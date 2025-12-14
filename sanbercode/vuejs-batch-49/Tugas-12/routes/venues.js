let express = require("express");
let router = express.Router();

//Import Controller
let VenueController = require("../controller/venues");

router.get("/", VenueController.findAll);

router.post("/", VenueController.save);

router.get("/:id", VenueController.find);

router.put("/:id", VenueController.edit);

router.delete("/:id", VenueController.destroy);

module.exports = router;
