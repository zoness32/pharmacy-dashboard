/*
  Warnings:

  - You are about to drop the `patient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `visit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "visit" DROP CONSTRAINT "visit_patient_id_fkey";

-- DropTable
DROP TABLE "patient";

-- DropTable
DROP TABLE "visit";

-- CreateTable
CREATE TABLE "patients" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" DATE NOT NULL,
    "address" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "blood_type" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visits" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "visit_time" DATE NOT NULL,
    "administration_location" TEXT NOT NULL,
    "location_address" TEXT NOT NULL,
    "location_city" TEXT NOT NULL,
    "location_state" TEXT NOT NULL,
    "location_zipcode" TEXT NOT NULL,
    "administering_nurse" TEXT NOT NULL,
    "medication" TEXT NOT NULL,
    "visit_duration_seconds" INTEGER NOT NULL,
    "medication_tolerance" TEXT NOT NULL,
    "patient_id" UUID,
    "blood_pressure" TEXT NOT NULL,
    "heartrate_bpm" INTEGER NOT NULL,
    "pain_level" INTEGER NOT NULL,

    CONSTRAINT "visits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "patients_email_key" ON "patients"("email");

-- AddForeignKey
ALTER TABLE "visits" ADD CONSTRAINT "visits_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
