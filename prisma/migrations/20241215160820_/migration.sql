/*
  Warnings:

  - You are about to drop the column `image` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "image",
ADD COLUMN     "primaryCategoryId" TEXT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brandId" TEXT;

-- CreateTable
CREATE TABLE "PrimaryCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PrimaryCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_primaryCategoryId_fkey" FOREIGN KEY ("primaryCategoryId") REFERENCES "PrimaryCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
