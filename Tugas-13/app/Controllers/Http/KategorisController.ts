import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import KategoriValidator from "App/Validators/KategoriValidator";

export default class KategorisController {
  public async save({ request, response }: HttpContextContract) {
    try {
      let payload = await request.validate(KategoriValidator);
      response.ok({ message: "Success", data: payload });
    } catch (err) {
      response.unprocessableEntity({ errors: err.messages });
    }
  }
}
