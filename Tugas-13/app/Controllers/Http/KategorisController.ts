import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import KategoriValidator from "App/Validators/KategoriValidator";
import Database from "@ioc:Adonis/Lucid/Database";

export default class KategorisController {
  public async index({ response }: HttpContextContract) {
    try {
      let result = await Database.from("kategoris");
      response.ok({ message: "success", data: result });
    } catch (error) {
      response.unprocessableEntity({ message: error.messages });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      let payload = await request.validate(KategoriValidator);
      let result = await Database.table("kategoris").insert(payload);
      response.created({ message: "Success", id: result });
    } catch (error) {
      response.unprocessableEntity({ errors: error.messages });
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      let result = await Database.from("kategoris")
        .where("id", params.id)
        .first();
      response.ok({ message: "success", data: result });
    } catch (error) {
      response.unprocessableEntity({ errors: error.messages });
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      let payload = await request.validate(KategoriValidator);
      let result = await Database.from("kategoris")
        .where("id", params.id)
        .update(payload);
      response.ok({ message: "success", data: result });
    } catch (error) {
      response.unprocessableEntity({ errors: error.messages });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      let result = await Database.from("kategoris")
        .where("id", params.id)
        .delete();
      response.ok({ message: "success", data: result });
    } catch (error) {
      response.unprocessableEntity({ errors: error.messages });
    }
  }
}
