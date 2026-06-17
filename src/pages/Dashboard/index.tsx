import { useState } from "react";
import { Filters } from "../../components/Filters";
import { Header } from "../../components/Header";
import { NewTaskModal } from "../../components/NewTaskModal";
import { Sidebar } from "../../components/Sidebar";
import { Task } from "../../components/Task";
import { useTaskContext } from "../../contexts/useTaskContext";
import { TaskActionTypes } from "../../components/reducers/taskAction";
import type { taskModel } from "../../models/taskModel";

export function Dashboard() {
  const { state, dispatch } = useTaskContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<taskModel | null>(null);

  function handleOpenModal() {
    setTaskToEdit(null);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setTaskToEdit(null);
    setModalOpen(false);
  }

  function handleEditTask(task: taskModel) {
    setTaskToEdit(task);
    setModalOpen(true);
  }

  function handleDeleteTask(taskId: number) {
    dispatch({ type: TaskActionTypes.DELETE_TASK, payload: taskId });
  }

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6">
          <Header onOpen={handleOpenModal} />

          <Filters />

          <section className="mt-6 bg-white rounded-2xl border border-slate-200 overflow-hidden">
            {state.map((task) => (
              <Task
                state={task}
                key={task.id}
                onEdit={() => handleEditTask(task)}
                onDelete={() => handleDeleteTask(task.id)}
              />
            ))}
          </section>
        </main>
      </div>

      <NewTaskModal
        key={taskToEdit?.id ?? "new"}
        open={modalOpen}
        onClose={handleCloseModal}
        taskToEdit={taskToEdit ?? undefined}
      />
    </>
  );
}
