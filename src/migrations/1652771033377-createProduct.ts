import { MigrationInterface, QueryRunner } from "typeorm";

export class createProduct1652771033377 implements MigrationInterface {
    name = 'createProduct1652771033377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`price\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`product\``);
    }

}
