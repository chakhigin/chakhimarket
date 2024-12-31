/*
  Warnings:

  - Added the required column `housenumber` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ring` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "housenumber" INTEGER NOT NULL,
ADD COLUMN     "ring" INTEGER NOT NULL;
