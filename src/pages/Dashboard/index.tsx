import { Filters } from "../../components/Filters";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function Dashboard(){
    return(
        <>
            <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <Header />

        <Filters />

        <section className="mt-6">
          {/* TaskCards */}
        </section>
      </main>
    </div>
        </>
    )
}