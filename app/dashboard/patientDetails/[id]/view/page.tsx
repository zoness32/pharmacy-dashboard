import PatientDetails from "@/app/ui/patient-view/patient-details";
import VisitTable from "@/app/ui/patient-view/visit-table";
import { fetchFilteredVisitsForPatient, fetchPatientById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Search from "@/app/ui/patient-view/search";
import SortBy from "@/app/ui/patient-view/sort-by";
import _ from "lodash";
import { VisitExtended } from "@/app/lib/types";

export default async function Page({
  params,
  searchParams
}: {
  params: { id: string },
  searchParams?: {
    query?: string;
    orderBy?: "desc" | "asc";
    sortBy?: string;
  }
}) {
  const query = searchParams?.query || '';
  const order = searchParams?.orderBy || 'desc';
  const sortBy = searchParams?.sortBy || 'visit_time';
  const [patient, fetchedVisits] = await Promise.all([
    fetchPatientById(params.id),
    fetchFilteredVisitsForPatient(query, params.id)
  ]);

  let visits = fetchedVisits;

  if (!patient) {
    notFound();
  }

  visits = _.orderBy(visits, [sortBy], [order]);

  return (
    <>
      <section className="flex shrink-0 rounded-lg mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-4">{ patient.full_name }</h1>
          <PatientDetails patient={ patient }/>
        </div>
      </section>
      <section className="w-full flex-grow rounded-lg mt-12">
        <h2 className="text-2xl font-bold mb-4">Visits</h2>
        <div className="flex flex-row justify-between mb-4">
          <div className="max-w-xl w-[100%]">
            <Search placeholder={ "Search" }/>
          </div>
          <SortBy/>
        </div>
        <VisitTable visits={ visits as VisitExtended[] }/>
      </section>
    </>
  )
}