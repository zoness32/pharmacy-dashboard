import {Patient} from "@prisma/client";

interface PatientDetailsProps {
    patient: Patient
}

export default function PatientDetails({patient}: PatientDetailsProps) {
    return (
        <div>
            <span>{patient.first_name} {patient.last_name}</span>
        </div>
    )
}