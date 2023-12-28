import PatientsTable from "@/app/ui/patients/patients-table";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12 bg-blue-300">
      <h1 className={`mb-4 text-xl md:text-2xl text-black`}>Patients</h1>
      <PatientsTable />
    </main>
  )
}
