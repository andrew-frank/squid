module.exports = class Data1660476858107 {
  name = 'Data1660476858107'

  async up(db) {
    await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "block" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "tx_hash" text NOT NULL, "type" integer NOT NULL, "input" jsonb NOT NULL, "data" jsonb, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
  }

  async down(db) {
    await db.query(`DROP TABLE "transaction"`)
  }
}
