import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableUsersAddCreatedAt1622917499337
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "created_at",
        type: "timestamp",
        default: "now()",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "created_at");
  }
}
