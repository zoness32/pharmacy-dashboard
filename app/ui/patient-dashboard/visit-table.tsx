import {Visit} from "@prisma/client";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"
import {Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from "flowbite-react";
import {
    getDateTimeInUSFormat,
    getDisplayableAdministrationLocation,
    getHHMMSSFromSeconds
} from "@/app/lib/dataFormatters";

interface VisitTableProps {
    visits: Array<Visit>;
}

export default async function VisitTable({visits}: VisitTableProps) {
    dayjs.extend(duration);

    return (
        <div className='overflow-x-auto'>
            <Table striped>
                <TableHead>
                    <TableHeadCell>Visit Date</TableHeadCell>
                    <TableHeadCell>Administering Nurse</TableHeadCell>
                    <TableHeadCell>Visit Duration</TableHeadCell>
                    <TableHeadCell>Administration Location</TableHeadCell>
                    {/*<TableHeadCell>Address</TableHeadCell>*/}
                    {/*<TableHeadCell>City</TableHeadCell>*/}
                    {/*<TableHeadCell>State</TableHeadCell>*/}
                    {/*<TableHeadCell>Zip</TableHeadCell>*/}
                    <TableHeadCell>Medication</TableHeadCell>
                    <TableHeadCell>Medication Tolerance</TableHeadCell>
                    <TableHeadCell>Blood Pressure</TableHeadCell>
                    <TableHeadCell>Heart Rate (bpm)</TableHeadCell>
                    <TableHeadCell>Pain Level</TableHeadCell>
                </TableHead>
                <TableBody className='divide-y'>
                    {
                        visits.map(visit => {
                            return (
                                <TableRow key={visit.id}>
                                    <TableCell>{getDateTimeInUSFormat(visit.visit_time)}</TableCell>
                                    <TableCell>{visit.administering_nurse}</TableCell>
                                    <TableCell>{getHHMMSSFromSeconds(visit.visit_duration_seconds)}</TableCell>
                                    <TableCell>{getDisplayableAdministrationLocation(visit)}</TableCell>
                                    {/*<TableCell className="whitespace-nowrap">{visit.location_address}</TableCell>*/}
                                    {/*<TableCell>{visit.location_city}</TableCell>*/}
                                    {/*<TableCell>{visit.location_state}</TableCell>*/}
                                    {/*<TableCell>{visit.location_zipcode}</TableCell>*/}
                                    <TableCell>{visit.medication}</TableCell>
                                    <TableCell>{visit.medication_tolerance}</TableCell>
                                    <TableCell>{visit.blood_pressure}</TableCell>
                                    <TableCell>{visit.heartrate_bpm}</TableCell>
                                    <TableCell>{visit.pain_level}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}