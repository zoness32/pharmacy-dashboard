import PatientDetails from "@/app/ui/patient-view/patient-details";
import VisitTable from "@/app/ui/patient-view/visit-table";
import { fetchPatientAndVisitsById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { VisitExtended } from "@/app/lib/types";
import Search from "@/app/ui/patient-view/search";

export default async function Page({
  params
}: {
  params: { id: string }
}) {
  const patient = await fetchPatientAndVisitsById(params.id);

  if (!patient) {
    notFound();
  }

  return (
    <>
      <section className="flex shrink-0 rounded-lg mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-4">{ patient.full_name }</h1>
          <PatientDetails patient={ patient }/>
        </div>
      </section>
      <section className="w-full flex-grow rounded-lg mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Visits</h2>
          <div className="m-4 ml-0 max-w-xl"><Search placeholder={"test"} /></div>
          <VisitTable visits={ patient.visits as Array<VisitExtended> }/>
        </div>
      </section>
    </>
  )
}