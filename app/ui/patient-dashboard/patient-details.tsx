import {Patient} from "@prisma/client";
import dayjs from "dayjs";

interface PatientDetailsProps {
    patient: Patient
}

export default function PatientDetails({patient}: PatientDetailsProps) {
    return (
        <div className="flex flex-col">
            <span><strong>Name: </strong>{patient.first_name} {patient.last_name}</span>
            <span><strong>Email: </strong>{patient.email}</span>
            <span><strong>Birth Date: </strong>{dayjs(patient.birthdate).format('MM/DD/YYYY')}</span>
            <span><strong>Blood Type: </strong>{patient.blood_type}</span>
            <span><strong>Sex: </strong>{patient.sex}</span>
            <span><strong>Street Address: </strong>{patient.address}</span>
            <span><strong>City: </strong>{patient.city}</span>
            <span><strong>State: </strong>{patient.state}</span>
            <span><strong>Zipcode: </strong>{patient.zipcode}</span>
        </div>
    )
}