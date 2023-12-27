/*
  Warnings:

  - Changed the type of `medication_tolerance` on the `visits` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "visits" DROP COLUMN "medication_tolerance",
ADD COLUMN     "medication_tolerance" INTEGER NOT NULL;
