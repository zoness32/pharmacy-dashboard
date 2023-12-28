import Link from "next/link";

export default async function ViewPatient({id}: {id: string}) {
  return (
    <Link href={`/dashboard/patientDetails/${id}/view`}
          className="rounded-md border p-2 hover:bg-gray-100">
      View Details
    </Link>
  )
}