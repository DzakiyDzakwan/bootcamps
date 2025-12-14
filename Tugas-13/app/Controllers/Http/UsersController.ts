import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Profile from "App/Models/Profile";
import User from "App/Models/User";

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await User.all();
      response.ok({ message: "success", data: data });
    } catch (error) {
      response.unprocessableEntity({ message: error.messages });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = await User.create(request.body());
      response.ok({ message: "Ok", data: data });
    } catch (error) {
      response.unprocessableEntity({ message: error.messages });
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const user = await User.findByOrFail("id", params.id);
      const data = user.related("profile");
      response.ok({ message: "Success", data: data });
    } catch (error) {
      response.notFound({ message: error.message });
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id);
      user.nama = request.input("nama");
      user.email = request.input("email");
      user.password = request.input("password");
      user.role = request.input("role");

      let data = await user.save();
      response.ok({ message: "Success", data: data });
    } catch (error) {
      response.notFound({ message: error.message });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      let user = await User.findOrFail(params.id);
      user.delete();
      response.ok({ message: "Success" });
    } catch (error) {
      response.unprocessableEntity({ message: error.message });
    }
  }

  public async addProfile({ request, response, auth }: HttpContextContract) {
    try {
      // const profile = await Profile.updateOrCreate(
      //   { user_id: auth.user?.id },
      //   {
      //     bio: request.input("bio"),
      //     alamat: request.input("alamat"),
      //     user_id: auth.user?.id,
      //   }
      // );

      const user = auth.user;

      const profile = await user?.related("profile").create({
        bio: request.input("bio"),
        alamat: request.input("alamat"),
      });

      return response.created({ message: "Berhasil", data: profile });
    } catch (error) {
      response.badRequest({ message: error.message });
    }
  }
}
