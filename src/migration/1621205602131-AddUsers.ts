import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUsers1621205602131 implements MigrationInterface {
    name = 'AddUsers1621205602131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_auth` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user_auth` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_auth` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `user_auth` DROP COLUMN `createdAt`");
    }

}
