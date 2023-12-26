import {Visit} from "@prisma/client";
import dayjs from "dayjs";
import {Accordion, AccordionContent, AccordionPanel, AccordionTitle} from "flowbite-react";

interface VisitTableProps {
    visits: Array<Visit>;
}

export default async function VisitTable({visits}: VisitTableProps) {
    return (
        <Accordion>
            {
                visits.map(visit => {
                    return <AccordionPanel key={visit.id}>
                        <AccordionTitle>{dayjs(visit.visit_time).format("MM/DD/YYYY")} by {visit.administering_nurse}</AccordionTitle>
                        <AccordionContent>
                            <div className="flex flex-col">
                                <span><strong>Administration Location: </strong>{visit.administration_location}</span>
                                <span><strong>Address: </strong>{visit.location_address} {visit.location_city}, {visit.location_state} {visit.location_zipcode}</span>
                                <span><strong>Administering Nurse: </strong>{visit.administering_nurse}</span>
                                <span><strong>Visit Duration: </strong>{visit.visit_duration_seconds}</span>
                                <span><strong>Medication: </strong>{visit.medication}</span>
                                <span><strong>Biometric Info</strong></span>
                                <span><strong>Blood Pressure: </strong>{visit.blood_pressure}</span>
                                <span><strong>Heart Rate: </strong>{visit.heartrate_bpm}</span>
                                <span><strong>Medication Tolerance: </strong>{visit.medication_tolerance}</span>
                                <span><strong>Pain Level: </strong>{visit.pain_level}</span>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                })
            }
        </Accordion>
    )
}