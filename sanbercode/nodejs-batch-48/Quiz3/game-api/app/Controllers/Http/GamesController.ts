import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import GameValidator from "App/Validators/GameValidator";

export default class GamesController {
  public async index({ response }: HttpContextContract) {
    try {
      let data = await Database.from("games");
      response.ok({ message: "Berhasil", data: data });
    } catch (error) {
      response.unprocessableEntity({ message: error.messages });
    }
  }

  public async store({ response, request }: HttpContextContract) {
    try {
      let payload = await request.validate(GameValidator);
      let insertResult = await Database.table("games").insert(payload);
      let data = await Database.from("games")
        .where("id", insertResult[0])
        .first();
      response.ok({ message: "Berhasil", data: data });
    } catch (error) {
      response.unprocessableEntity({ message: error.messages });
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      let data = await Database.from("games").where("id", params.id).first();
      if (!data) {
        return response.notFound({ message: "Data tidak berhasil ditemukan" });
      }
      return response.ok({ message: "Berhasil", data: data });
    } catch (error) {}
  }

  public async update({ response, request, params }: HttpContextContract) {
    try {
      let payload = await request.validate(GameValidator);
      let updateResult = await Database.from("games")
        .where("id", params.id)
        .update(payload);
      if (!updateResult) {
        return response.notFound({ message: "Data tidak berhasil ditemukan" });
      }
      let data = await Database.from("games").where("id", params.id);
      response.ok({ message: "Berhasil", data: data });
    } catch (error) {
      response.unprocessableEntity({ message: error.messages });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      let deleteResult = await Database.from("games")
        .where("id", params.id)
        .delete();
      if (!deleteResult) {
        return response.notFound({ message: "Data tidak berhasil ditemukan" });
      }
      response.ok({ message: "Berhasil" });
    } catch (error) {
      response.unprocessableEntity({ message: error.messages });
    }
  }
}
