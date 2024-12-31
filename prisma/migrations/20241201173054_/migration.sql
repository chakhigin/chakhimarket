-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- CreateTable
CREATE TABLE "HomeSlider" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "HomeSlider_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
