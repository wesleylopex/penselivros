import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Category from "App/Models/Category";

export default class CategoriesController {
  public async index() {
    return await Category.all();
  }
  public async show({ params }: HttpContextContract) {
    const category = await Category.find(params.id);

    return category;
  }
}
