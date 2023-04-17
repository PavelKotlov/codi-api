/*
  Warnings:

  - The values [CHALLANGE] on the enum `CardType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CardType_new" AS ENUM ('CONCEPT', 'CHALLENGE');
ALTER TABLE "Card" ALTER COLUMN "type" TYPE "CardType_new" USING ("type"::text::"CardType_new");
ALTER TYPE "CardType" RENAME TO "CardType_old";
ALTER TYPE "CardType_new" RENAME TO "CardType";
DROP TYPE "CardType_old";
COMMIT;
