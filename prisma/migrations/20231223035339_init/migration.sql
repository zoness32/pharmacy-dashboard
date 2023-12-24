CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "patient" (
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

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visit" (
    "id" UUID NOT NULL,
    "visit_time" DATE NOT NULL,
    "administration_location" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "administering_nurse" TEXT NOT NULL,
    "medication" TEXT NOT NULL,
    "visit_duration_seconds" INTEGER NOT NULL,
    "biological_data_id" UUID NOT NULL,
    "medication_tolerance" TEXT NOT NULL,
    "patient_id" UUID,

    CONSTRAINT "visit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "patient_email_key" ON "patient"("email");

-- AddForeignKey
ALTER TABLE "visit" ADD CONSTRAINT "visit_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
