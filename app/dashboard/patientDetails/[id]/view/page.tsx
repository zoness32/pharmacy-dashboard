import PatientDetails from "@/app/ui/patient-view/patient-details";
import VisitTable from "@/app/ui/patient-view/visit-table";
import { fetchPatientAndVisitsById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Search from "@/app/ui/patient-view/search";
import SortBy from "@/app/ui/patient-view/sort-by";
import { VisitExtended } from "@/app/lib/types";
import useSearchVisits from "@/app/lib/hooks/useSearchVisits";

const keysToSearch: Array<keyof VisitExtended> = ["visit_time", "administering_nurse", "blood_pressure", "heartrate_bpm", "administration_location_displayable", "medication", "medication_tolerance_displayable", "pain_level"];

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
  const [patient] = await Promise.all([
    fetchPatientAndVisitsById(params.id),
    // this can be used to shift the filtering to the database layer instead of the frontend; however, the current
    // implementation using Prisma is limited to searching only text columns. With more time I'd craft a raw sql query
    // to filter on all visible table columns, but the frontend solution below doesn't have that limitation.

    // fetchFilteredVisitsForPatient(query, params.id)
  ]);
  const { searchVisits, sortAndOrderVisits } = useSearchVisits();

  if (!patient) {
    notFound();
  }

  let searchResults = searchVisits(patient.visits, keysToSearch, query);

  searchResults = sortAndOrderVisits(searchResults, sortBy, order);

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
        <div className="flex flex-col justify-between mb-4 lg:flex-row">
          <div className="max-w-lg mb-4 w-[100%] lg:mb-0">
            <Search placeholder={ "Search" }/>
          </div>
          <SortBy/>
        </div>
        <VisitTable visits={ searchResults }/>
      </section>
    </>
  )
}