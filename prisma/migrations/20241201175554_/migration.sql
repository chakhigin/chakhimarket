/*
  Warnings:

  - You are about to drop the `HomeSlider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "HomeSlider";

-- CreateTable
CREATE TABLE "Slider" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Slider_pkey" PRIMARY KEY ("id")
);
