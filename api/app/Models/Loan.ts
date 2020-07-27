import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";

import User from "App/Models/User";
import Book from "App/Models/Book";

export default class Loan extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @belongsTo(() => User)
  public userId: BelongsTo<typeof User>;

  @belongsTo(() => Book)
  public bookId: BelongsTo<typeof Book>;

  @column.dateTime()
  public finishedAt: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
