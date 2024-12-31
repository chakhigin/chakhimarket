/*
  Warnings:

  - You are about to drop the column `payonline` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "payonline",
ADD COLUMN     "paymentType" TEXT;
