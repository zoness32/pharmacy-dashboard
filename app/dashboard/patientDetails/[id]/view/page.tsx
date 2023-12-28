import PatientDetails from "@/app/ui/patient-view/patient-details";
import VisitTable from "@/app/ui/patient-view/visit-table";
import { fetchPatientAndVisitsById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { VisitExtended } from "@/app/lib/types";

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
        { <PatientDetails patient={ patient }/> }
      </section>
      <section className="w-full flex-grow rounded-lg">
        { <VisitTable visits={ patient.visits as Array<VisitExtended> }/> }
      </section>
    </>
  )
}