import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Book from "App/Models/Book";

export default class BooksController {
  public async index() {
    return await Book.all();
  }

  public async show({ params }: HttpContextContract) {
    const { bookId } = params;
    const book = await Book.findOrFail(bookId);

    return book;
  }

  public async create({ request }: HttpContextContract) {
    const data = request.all();
    const books = await Book.create(data);

    return books;
  }

  public async update({ params, request }: HttpContextContract) {
    const { bookId } = params;
    const data = request.all();
    const book = await Book.findOrFail(bookId);

    book.title = data.title;
    book.authorName = data.authorName;
    book.image = data.image;
    book.categoryId = data.categoryId;
    book.userId = data.userId;
    book.reservedAt = data.reservedAt;

    await book.save();

    const savedBook = await Book.find(book.id);
    return savedBook;
  }

  public async delete({ params }: HttpContextContract) {
    const { bookId } = params;
    const book = await Book.findOrFail(bookId);

    await book.delete();

    return book.$isDeleted;
  }
}
