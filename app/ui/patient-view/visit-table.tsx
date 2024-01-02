import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import {
  getDateTimeInUSFormat,
  getHHMMSSFromSeconds
} from "@/app/lib/dataFormatters";
import { VisitExtended } from "@/app/lib/types";

interface VisitTableProps {
  visits?: VisitExtended[];
}

export default async function VisitTable({ visits = [] }: VisitTableProps) {
  dayjs.extend(duration);

  return (
    <div className='overflow-x-auto flex flex-col'>
      <Table striped>
        <TableHead>
          <TableHeadCell>Visit Date</TableHeadCell>
          <TableHeadCell>Administering Nurse</TableHeadCell>
          <TableHeadCell>Visit Duration</TableHeadCell>
          <TableHeadCell>Administration Location</TableHeadCell>
          <TableHeadCell>Medication</TableHeadCell>
          <TableHeadCell>Medication Tolerance</TableHeadCell>
          <TableHeadCell>Blood Pressure</TableHeadCell>
          <TableHeadCell>Heart Rate (bpm)</TableHeadCell>
          <TableHeadCell>Pain Level</TableHeadCell>
        </TableHead>
        <TableBody className={ `divide-y ${ visits.length === 0 ? 'flex' : '' }` }>
          {
            visits.map(visit => {
              return (
                <TableRow key={ visit.id }>
                  <TableCell>{ getDateTimeInUSFormat(visit.visit_time) }</TableCell>
                  <TableCell>{ visit.administering_nurse }</TableCell>
                  <TableCell>{ getHHMMSSFromSeconds(visit.visit_duration_seconds) }</TableCell>
                  <TableCell>{ visit.administration_location_displayable }</TableCell>
                  <TableCell>{ visit.medication }</TableCell>
                  <TableCell>{ visit.medication_tolerance_displayable }</TableCell>
                  <TableCell>{ visit.blood_pressure }</TableCell>
                  <TableCell>{ visit.heartrate_bpm }</TableCell>
                  <TableCell>{ visit.pain_level }</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
      {
        visits.length === 0 ? (
          <div className="flex justify-center bg-white rounded-b-lg">
            <span className="pt-2 pb-3 text-[#707680]">No results found</span>
        </div>
        ) : <></>
      }
    </div>
  )
}