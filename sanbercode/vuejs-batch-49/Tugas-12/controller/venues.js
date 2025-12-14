//Import Models
// const model = require("../models");
// const Venues = model.Venues;
const { Venues } = require("../models");

class VenueController {
  static async findAll(req, res) {
    try {
      let result = await Venues.findAll();
      res.status(200).json({ message: "success", data: result });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async save(req, res) {
    let { name, address, phone } = req.body;
    try {
      //Creat With Instance
      /* let result = Venues.build({
        name: name,
        address: address,
        phone: phone,
      });

      result.save(); */

      // Create With Shorthand
      let result = await Venues.create({
        name: name,
        address: address,
        phone: phone,
      });
      res.status(201).json({ message: "Success", data: result });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async find(req, res) {
    try {
      // let result = await Venues.findAll({ where: { id: req.params.id } });

      let result = await Venues.findByPk(req.params.id);

      if (!result) {
        res.status(404).json({ message: "Data not Found" });
      } else {
        res.status(200).json({ message: "Success", data: result });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async edit(req, res) {
    let { name, address, phone } = req.body;

    try {
      let result = await Venues.update(
        { name: name, address: address, phone: phone },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      res.status(200).json({
        message: "Success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async destroy(req, res) {
    try {
      let result = await Venues.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (result) {
        res.status(200).json({ message: "Success" });
      } else {
        res.status(404).json({ message: "Data not found" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = VenueController;
