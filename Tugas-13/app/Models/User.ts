import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  beforeSave,
  hasOne,
  HasOne,
} from "@ioc:Adonis/Lucid/Orm";
import Hash from "@ioc:Adonis/Core/Hash";
import Profile from "App/Models/Profile";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nama: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public role: string;

  @column()
  public rememberMeToken?: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }

  @hasOne(() => Profile)
  public profile: HasOne<typeof Profile>;
}
