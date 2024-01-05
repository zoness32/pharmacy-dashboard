import { Patient, Visit } from "@prisma/client";

export type VisitExtended = Visit & {
  administration_location_displayable: "In Home" | "Hospital" | undefined,
  medication_tolerance_displayable: "Terrible" | "Bad" | "Neutral" | "Good" | "Great" | undefined,
};

export type PatientExtended = Patient & { full_name: string };