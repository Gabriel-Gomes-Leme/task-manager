import { useState } from "react";
import { Filters } from "../../components/Filters";
import { Header } from "../../components/Header";
import { NewTaskModal } from "../../components/NewTaskModal";
import { Sidebar } from "../../components/Sidebar";
import { Task } from "../../components/Task";
import { useTaskContext } from "../../contexts/useTaskContext";
import { TaskActionTypes } from "../../components/reducers/taskAction";
import { Status, type taskModel } from "../../models/taskModel";
import { showMessage } from "../../adapters/showMessage";

export function Dashboard() {
  const { state, dispatch } = useTaskContext();
  const taskList = state;
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
  function handleStatus(task: taskModel) {
    showMessage.success("Status alterado");
    dispatch({ type: TaskActionTypes.CHANGE_STATUS, payload: task });
  }

  const [filter, setFilter] = useState<"Todas" | Status>("Todas");

  const filteredTasks = taskList.filter((task) => {
    if (filter === "Todas") return true;
    return task.status === filter;
  });

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row">
        <Sidebar />

        <div className="flex-1 p-4 sm:p-6">
          <Header onOpen={handleOpenModal} />

          <Filters currentFilter={filter} onChange={setFilter} />

          {filteredTasks.length < 1 && filter == "Todas" && (
            <h2 className="mt-6">Sem tarefas</h2>
          )}

          {filteredTasks.length < 1 && filter == Status.PENDENTE && (
            <h2 className="mt-6">Sem tarefas pendentes</h2>
          )}
          {filteredTasks.length < 1 && filter == Status.CONCLUIDA && (
            <h2 className="mt-6">Sem tarefas Concluídas</h2>
          )}

          <section className="mt-6 bg-white rounded-2xl border border-slate-200 overflow-hidden">
            {filteredTasks.map((task) => (
              <Task
                state={task}
                key={task.id}
                onEdit={() => handleEditTask(task)}
                onDelete={() => handleDeleteTask(task.id)}
                handleStatus={() => handleStatus(task)}
              />
            ))}
          </section>
        </div>
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
