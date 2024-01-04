export default function Layout({ children} : {children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-blue-300">
      <div className="flex-grow p-6 md:overflow-y-auto">{ children }</div>
    </div>
  )
}