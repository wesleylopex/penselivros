import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index() {
    return await User.all();
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.find(params.id);
    return user;
  }

  public async create({ request }: HttpContextContract) {
    const data = request.only(["isAdmin", "name", "username", "password"]);
    const user = await User.create(data);
    return user;
  }

  public async update({ params, request }: HttpContextContract) {
    const data = request.only(["isAdmin", "name", "username", "password"]);
    const user = await User.findOrFail(params.id);

    user.isAdmin = data.isAdmin;
    user.name = data.name;
    user.username = data.username;
    user.password = data.password;

    await user.save();

    const savedUser = await User.find(user.id);
    return savedUser;
  }

  public async delete({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    await user.delete();

    return user.$isDeleted;
  }
}
