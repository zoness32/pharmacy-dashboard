import dayjs from "dayjs";
import { PatientExtended } from "@/app/lib/types";
import { Card } from "flowbite-react";
import humanizeString from "humanize-string";

interface PatientDetailsProps {
  patient: PatientExtended
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <Card className="flex flex-col">
      <span><strong>Email: </strong>{ patient.email }</span>
      <span><strong>Birth Date: </strong>{ dayjs(patient.birthdate).format('MM/DD/YYYY') }</span>
      <span><strong>Blood Type: </strong>{ patient.blood_type }</span>
      <span><strong>Sex: </strong>{ humanizeString(patient.sex) }</span>
      <span><strong>Street Address: </strong>{ patient.address }</span>
      <span><strong>City: </strong>{ patient.city }</span>
      <span><strong>State: </strong>{ patient.state }</span>
      <span><strong>Zipcode: </strong>{ patient.zipcode }</span>
    </Card>
  )
}