/*
  Warnings:

  - You are about to drop the column `biological_data_id` on the `visit` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `visit` table. All the data in the column will be lost.
  - Added the required column `zipcode` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blood_pressure` to the `visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `heartrate_bpm` to the `visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_address` to the `visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_city` to the `visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_state` to the `visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_zipcode` to the `visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pain_level` to the `visit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "patient" ADD COLUMN     "zipcode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "visit" DROP COLUMN "biological_data_id",
DROP COLUMN "location",
ADD COLUMN     "blood_pressure" TEXT NOT NULL,
ADD COLUMN     "heartrate_bpm" INTEGER NOT NULL,
ADD COLUMN     "location_address" TEXT NOT NULL,
ADD COLUMN     "location_city" TEXT NOT NULL,
ADD COLUMN     "location_state" TEXT NOT NULL,
ADD COLUMN     "location_zipcode" TEXT NOT NULL,
ADD COLUMN     "pain_level" INTEGER NOT NULL,
ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();
