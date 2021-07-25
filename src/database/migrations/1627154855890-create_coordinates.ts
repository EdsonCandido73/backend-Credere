import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCoordinates1627154855890 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'coordinates',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
        },
        {
          name: 'xCoordinate',
          type: 'integer'
        },
        {
          name: 'yCoordinate',
          type: 'integer'
        },
        {
          name: 'navDirection',
          type: 'varchar'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('coordinates')
  }
}
