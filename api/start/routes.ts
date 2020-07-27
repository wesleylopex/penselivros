/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

// books
Route.get("/users", "UsersController.index");
Route.get("/users/:id", "UsersController.show");
Route.post("/users", "UsersController.create");
Route.put("/users/:id", "UsersController.update");
Route.delete("/users/:id", "UsersController.delete");

// categories
Route.get("/categories", "CategoriesController.index");
Route.post("/categories", "CategoriesController.create");
Route.put("/categories/:categoryId", "CategoriesController.update");
Route.delete("/categories/:categoryId", "CategoriesController.delete");

// books
Route.get("/books", "BooksController.index");
Route.get("/books/:bookId", "BooksController.show");
Route.post("/books", "BooksController.create");
Route.put("/books/:bookId", "BooksController.update");
Route.delete("/books/:bookId", "BooksController.delete");
