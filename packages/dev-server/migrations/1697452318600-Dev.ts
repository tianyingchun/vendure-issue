import {MigrationInterface, QueryRunner} from "typeorm";

export class Dev1697452318600 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `collection_translation` DROP COLUMN `customFieldsMetatitle`", undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `collection_translation` ADD `customFieldsMetatitle` varchar(255) NULL", undefined);
   }

}
