import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "peminjaman";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("user_id").unsigned();
      table.integer("buku_id").unsigned();
      table.date("tanggal_pinjam");
      table.date("tanggal_kembali");
      table.foreign("user_id").references("users.id");
      table.foreign("buku_id").references("bukus.id");
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp("created_at", { useTz: true });
      // table.timestamp("updated_at", { useTz: true });
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
