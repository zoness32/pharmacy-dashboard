import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"
import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,
} from "flowbite-react";
import ViewPatient from "@/app/ui/patients/view-patient";
import { fetchPatients } from "@/app/lib/data";

export default async function PatientsTable() {
  dayjs.extend(duration);
  const patients = await fetchPatients();

  return (
    <div className='overflow-x-auto'>
      <Table striped hoverable>
        <TableHead>
          <TableHeadCell>Patient Name</TableHeadCell>
          <TableHeadCell className="hidden md:table-cell">Patient Email</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className='divide-y'>
          {
            patients.map(patient => {
              return (
                <TableRow key={ patient.id }>
                  <TableCell>{ patient.full_name }</TableCell>
                  <TableCell className="hidden md:table-cell">{ patient.email }</TableCell>
                  <TableCell className="flex flex-1 justify-end">
                    <ViewPatient id={ patient.id }/>
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </div>
  )
}