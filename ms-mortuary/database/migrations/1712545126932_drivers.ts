import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "drivers";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
      table.string("user_id").references("user_id");
      table.string("name");
      table.string("vehicle");
      table.string("model");
      table.string("phone_number");
      table.integer("capacity");
      table.integer("status");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
