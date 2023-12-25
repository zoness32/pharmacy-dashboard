import {Patient} from "@prisma/client";

interface PatientDetailsProps {
    patients: Array<Patient>
}

export default function PatientDetails({patients}: PatientDetailsProps) {
    return (
        <div>
            {
                patients.map(patient => {
                        return <span>{patient.first_name}</span>;
                    }
                )
            }
        </div>
    )
}