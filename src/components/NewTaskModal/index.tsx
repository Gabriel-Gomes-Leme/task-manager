import { useState } from "react";
import { useTaskContext } from "../../contexts/useTaskContext";
import { TaskActionTypes } from "../reducers/taskAction";
import { Status, type taskModel } from "../../models/taskModel";
import { showMessage } from "../../adapters/showMessage";

type NewTaskModalProps = {
  open: boolean;
  onClose: () => void;
  taskToEdit?: taskModel;
};

export function NewTaskModal({ open, onClose, taskToEdit }: NewTaskModalProps) {
  const { dispatch } = useTaskContext();
  const [title, setTitle] = useState(taskToEdit?.title ?? "");
  const [description, setDescription] = useState(taskToEdit?.description ?? "");
  const [dueDate, setDueDate] = useState(
    taskToEdit ? new Date(taskToEdit.due_date).toISOString().slice(0, 10) : ""
  );
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() || !description.trim() || !dueDate) {
      setError("Preencha todos os campos para criar a tarefa.");
      return;
    }

    const dueDateTimestamp = new Date(dueDate).getTime();
    if (Number.isNaN(dueDateTimestamp)) {
      setError("A data de vencimento não é válida.");
      return;
    }

    const taskPayload: taskModel = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title: title.trim(),
      description: description.trim(),
      status: taskToEdit ? taskToEdit.status : Status.PENDENTE,
      due_date: dueDateTimestamp,
    };

    if (taskToEdit) {
      dispatch({ type: TaskActionTypes.UPDATE_TASK, payload: taskPayload });
      showMessage.success("Tarefa atualizada!");
    } else {
      dispatch({ type: TaskActionTypes.ADD_TASK, payload: taskPayload });
      showMessage.success("Tarefa criada!");
    }

    onClose();
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-xl sm:max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Nova tarefa</h2>
            <p className="text-sm text-slate-500">Preencha os dados para adicionar uma nova tarefa.</p>
          </div>

          <button
            type="button"
            className="text-slate-500 transition hover:text-slate-900"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>

        <form className="space-y-5 p-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="task-title">
              Título
            </label>
            <input
              id="task-title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Digite o título da tarefa"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="task-description">
              Descrição
            </label>
            <textarea
              id="task-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Digite a descrição da tarefa"
              className="h-28 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="task-due-date">
              Data de vencimento
            </label>
            <input
              id="task-due-date"
              type="date"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>

          {error ? <p className="text-sm text-red-500">{error}</p> : null}

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100 cursor-pointer"
              onClick={onClose}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded-xl bg-violet-600 px-5 py-3 text-white font-medium transition hover:bg-violet-700 cursor-pointer"
            >
              Salvar tarefa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
