import { Filters } from "../../components/Filters";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Task } from "../../components/Task";
import { useTaskContext } from "../../contexts/useTaskContext";



export function Dashboard() {
  const { state } = useTaskContext();

  console.log(state);
  return (
    <>
      <div className="min-h-screen bg-slate-100 flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <Header />

          <Filters />

          <section className="mt-6 bg-white rounded-2xl border border-slate-200 overflow-hidden">
            {state.map((task) => (
              <Task state={task} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
