import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import BukuValidator from "App/Validators/BukuValidator";

export default class BukusController {
  public async save({ request, response }: HttpContextContract) {
    try {
      let payload = await request.validate(BukuValidator);
      response.ok({ message: "Success", data: payload });
    } catch (error) {
      response.unprocessableEntity({ errors: error.messages });
    }
  }
}
