import { useState } from "react";
import { Filters } from "../../components/Filters";
import { Header } from "../../components/Header";
import { NewTaskModal } from "../../components/NewTaskModal";
import { Sidebar } from "../../components/Sidebar";
import { Task } from "../../components/Task";
import { useTaskContext } from "../../contexts/useTaskContext";

export function Dashboard() {
  const { state } = useTaskContext();
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <Header onOpen={handleOpenModal} />

          <Filters />

          <section className="mt-6 bg-white rounded-2xl border border-slate-200 overflow-hidden">
            {state.map((task) => (
              <Task state={task} key={task.id} />
            ))}
          </section>
        </main>
      </div>

      <NewTaskModal open={modalOpen} onClose={handleCloseModal} />
    </>
  );
}
