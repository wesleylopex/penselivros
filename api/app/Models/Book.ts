import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";

import Category from "App/Models/Category";
import User from "App/Models/User";

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;

  @column()
  public authorName: string;

  @column()
  public image: string;

  @belongsTo(() => Category)
  public categoryId: BelongsTo<typeof Category>;

  @belongsTo(() => User)
  public userId: BelongsTo<typeof User>;

  @column.dateTime()
  public reservedAt: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
