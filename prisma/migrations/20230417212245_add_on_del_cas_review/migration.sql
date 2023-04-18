-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_cardId_fkey";

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
