import { Status, type taskModel } from "../../models/taskModel";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type taskProps = {
  state: taskModel;
  onEdit: () => void;
  onDelete: () => void;
};

export function Task({ state, onEdit, onDelete }: taskProps) {
  return (
    <div
      key={state.id}
      className={`
                   ${state.status === Status.CONCLUIDA ? 'bg-green-100' : ''}
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    justify-between
                    px-6
                    py-5
                    border
                    border-slate-100
                    hover:bg-slate-50
                    transition
                `}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
        <input
          type="checkbox"
          checked={state.status === Status.CONCLUIDA}
          className="w-5 h-5"
        />

        <div>
          <h3 className="font-semibold text-slate-800">{state.title}</h3>

          <p className="text-sm text-slate-500">{state.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`
            text-sm
            font-medium
            ${
              state.status === Status.CONCLUIDA
                ? "text-green-600"
                : "text-orange-500"
            }
          `}
        >
          {new Date(state.due_date).toLocaleDateString("pt-BR")}
        </span>

        <button
          type="button"
          className="
            p-2
            border
            rounded-lg
            hover:bg-slate-100
          "
          onClick={onEdit}
        >
          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
        </button>

        <button
          type="button"
          className="
            p-2
            border
            rounded-lg
            text-red-500
            hover:bg-red-50
          "
          onClick={onDelete}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}
