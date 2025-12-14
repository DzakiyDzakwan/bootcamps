import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "games";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("title");
      table.text("gameplay", "longtext");
      table.dateTime("release_date");
      table.integer("genre_id").unsigned();
      table
        .foreign("genre_id")
        .references("genres.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
