export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12">
      <section className="flex h-[22rem] shrink-0 rounded-lg bg-blue-500 p-4 mb-6">
        <h1>First section with 1/3 of the page.</h1>
      </section>
      <section className="w-full flex-grow rounded-lg bg-green-200 p-4">
        <h1>Second section with 2/3 of the page.</h1>
      </section>
    </main>
  )
}
