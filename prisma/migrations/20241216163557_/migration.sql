/*
  Warnings:

  - You are about to drop the column `primaryCategoryId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the `PrimaryCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_primaryCategoryId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "primaryCategoryId",
ADD COLUMN     "parentCategoryId" TEXT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "parentCategoryId" TEXT;

-- DropTable
DROP TABLE "PrimaryCategory";

-- CreateTable
CREATE TABLE "ParentCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ParentCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "ParentCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "ParentCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
