/*
  Warnings:

  - You are about to drop the column `orderedCounts` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "orderedCounts",
ADD COLUMN     "orderCounts" INTEGER DEFAULT 0,
ALTER COLUMN "qty" SET DEFAULT 0;
