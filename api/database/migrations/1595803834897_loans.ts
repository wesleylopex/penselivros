import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Loans extends BaseSchema {
  protected tableName = 'loans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer("user_id")
        .notNullable()
        .references("id")
        .inTable("users");
      table
        .integer("book_id")
        .notNullable()
        .references("id")
        .inTable("books");
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
