import Image from 'next/image'
import VisitTable from "@/app/ui/patient-dashboard/visit-table";
import PatientDetails from "@/app/ui/patient-dashboard/patient-details";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12">
      <section className="flex h-[22rem] shrink-0 rounded-lg bg-blue-500 p-4 mb-6">
        <PatientDetails/>
      </section>
      <section className="w-full flex-grow rounded-lg bg-green-200 p-4">
          <VisitTable />
      </section>
    </main>
  )
}
