import Link from "next/link";

export default async function ViewPatient({id}: {id: string}) {
  return (
    <Link href={`/dashboard/patientDetails/${id}/view`}
          className="rounded-md border p-2 bg-blue-300 text-black hover:bg-blue-500 self-end">
      View Details
    </Link>
  )
}