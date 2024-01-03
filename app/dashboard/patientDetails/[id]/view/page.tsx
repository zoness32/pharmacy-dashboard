import PatientDetails from "@/app/ui/patient-view/patient-details";
import VisitTable from "@/app/ui/patient-view/visit-table";
import {fetchFilteredVisitsForPatient, fetchPatientAndVisitsById, fetchPatientById} from "@/app/lib/data";
import {notFound} from "next/navigation";
import Search from "@/app/ui/patient-view/search";
import SortBy from "@/app/ui/patient-view/sort-by";
import _ from "lodash";
import {VisitExtended} from "@/app/lib/types";

const keysToFilterOut: Array<keyof VisitExtended> = ["visit_time", "administering_nurse", "blood_pressure", "heartrate_bpm", "administration_location_displayable", "medication", "medication_tolerance_displayable", "pain_level"];

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
    // fetchFilteredVisitsForPatient(query, params.id)

  ]);

  console.log("query1   ", query);

  if (!patient) {
    notFound();
  }

  let visits = patient.visits;

  function extractFromObj<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    return keys.reduce((newObj, curr) => {
      newObj[curr] = obj[curr]

      return newObj
    }, {} as Pick<T, K>)
  }

  if (query) {
    const filterableVisits = visits.map(visit => {
      return extractFromObj(visit, keysToFilterOut);
    }).map(visit => {
      return Object.values(visit).map(val => {
        if (val) {
          return val.toString().toLowerCase();
        }
      });
    }).filter(valArray => {
      return valArray.some(val => val && val.includes(query))
    });

    // console.log(values);
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
        <div className="flex flex-col justify-between mb-4 lg:flex-row">
          <div className="max-w-lg mb-4 w-[100%] lg:mb-0">
            <Search placeholder={ "Search" }/>
          </div>
          <SortBy/>
        </div>
        <VisitTable visits={ visits as VisitExtended[] }/>
      </section>
    </>
  )
}