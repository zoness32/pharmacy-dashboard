import PatientsTable from "@/app/ui/patients/patients-table";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12 bg-floatblue-100">
      <PatientsTable />
    </main>
  )
}
