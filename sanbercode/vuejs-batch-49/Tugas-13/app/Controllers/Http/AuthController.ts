import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import UserValidator from "App/Validators/UserValidator";

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(UserValidator);
      const user = await User.create(payload);

      response.created({ message: "Registered", data: user });
    } catch (error) {
      response.unprocessableEntity({ message: error.messages });
    }
  }

  public async login({ request, response, auth }: HttpContextContract) {
    try {
      const email = request.input("email");
      const password = request.input("password");
      const token = await auth.use("api").attempt(email, password);

      response.ok({ message: "Login Success", data: token });
    } catch (error) {
      if (error.guard) {
        response.badRequest({ message: error.message });
      } else {
        response.badRequest({ message: error.messages });
      }
    }
  }

  public async logout({ response, auth }: HttpContextContract) {
    try {
      await auth.use("api").revoke();
      response.ok({ message: "Logout Berhasil" });
    } catch (error) {
      response.badRequest({ message: error.message });
    }
  }
}
