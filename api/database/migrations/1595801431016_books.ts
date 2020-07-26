import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Books extends BaseSchema {
  protected tableName = "books";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("title").notNullable();
      table.string("author_name");
      table.string("image");
      table
        .integer("category_id")
        .notNullable()
        .references("id")
        .inTable("categories");
      table.integer("user_id").references("id").inTable("users");
      table.dateTime("reserved_at");

      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
