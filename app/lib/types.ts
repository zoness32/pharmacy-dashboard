import { Patient, Visit } from "@prisma/client";

export type VisitExtended = Visit & {
  administration_location_displayable: string,
  medication_tolerance_displayable: string
};

export type PatientExtended = Patient & { full_name: string };