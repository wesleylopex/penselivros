import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Category from "App/Models/Category";

export default class CategoriesController {
  public async index() {
    return await Category.all();
  }

  public async create({ request }: HttpContextContract) {
    const data = request.only(["title", "isActive"]);

    const category = await Category.create(data);

    return category;
  }

  public async update({ params, request }: HttpContextContract) {
    const { categoryId } = params;
    const data = request.only(["title", "isActive"]);
    const category = await Category.findOrFail(categoryId);

    category.title = data.title;
    category.isActive = data.isActive;

    await category.save();

    const savedCategory = await Category.find(categoryId);
    return savedCategory;
  }

  public async delete({ params }: HttpContextContract) {
    const { categoryId } = params;
    const category = await Category.findOrFail(categoryId);

    await category.delete();

    return category.$isDeleted;
  }
}
