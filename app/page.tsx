import Image from 'next/image'
import VisitTable from "@/app/ui/patient-dashboard/visit-table";
import PatientDetails from "@/app/ui/patient-dashboard/patient-details";
import {fetchPatientAndVisits} from "@/app/lib/data";

export default async function Home() {
    const patient = await fetchPatientAndVisits();

  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12">
      <section className="flex shrink-0 rounded-lg bg-floatblue-500 p-4 mb-6">
          { patient ? <PatientDetails patient={patient}/> : <></> }
      </section>
      <section className="w-full flex-grow rounded-lg">
          {patient ? <VisitTable visits={patient.visits}/> : <></> }
      </section>
    </main>
  )
}
