import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "bukus";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("judul").notNullable();
      table.text("ringkasan");
      table.string("tahun_terbit", 45);
      table.integer("halaman");
      table.integer("kategori_id").unsigned();
      table
        .foreign("kategori_id")
        .references("kategoris.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
