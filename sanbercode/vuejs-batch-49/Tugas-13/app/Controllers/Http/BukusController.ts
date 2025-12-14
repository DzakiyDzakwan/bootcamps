import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import BukuValidator from "App/Validators/BukuValidator";
import Database from "@ioc:Adonis/Lucid/Database";

export default class BukusController {
  public async index({ response }: HttpContextContract) {
    try {
      let result = await Database.from("bukus");
      response.ok({ message: "success", data: result });
    } catch (error) {
      response.unprocessableEntity({ message: error.messages });
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      let result = await Database.from("bukus").where("id", params.id);
      response.ok({ message: "success", data: result });
    } catch (error) {}
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      let payload = await request.validate(BukuValidator);
      let result = await Database.table("bukus").insert(payload);
      response.created({ message: "Success", id: result });
    } catch (error) {
      response.unprocessableEntity({ errors: error.messages });
    }
  }

  public async update({ request, response, params }) {
    try {
      let payload = await request.validate(BukuValidator);
      let result = await Database.from("bukus")
        .where("id", params.id)
        .update(payload);
      response.ok({ message: "success", data: result });
    } catch (error) {
      response.unprocessableEntity({ message: error.messages });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      let result = await Database.from("bukus").where("id", params.id).delete();
      response.ok({ message: "success", data: result });
    } catch (error) {
      response.unprocessableEntity({ message: error.messages });
    }
  }
}
