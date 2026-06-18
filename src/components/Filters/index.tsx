import { Status } from "../../models/taskModel";

type FiltersProps = {
  currentFilter: "Todas" | Status;
  onChange: (filter: "Todas" | Status) => void;
};

const filterOptions: Array<{ label: "Todas" | Status; value: "Todas" | Status }> = [
  { label: "Todas", value: "Todas" },
  { label: Status.PENDENTE, value: Status.PENDENTE },
  { label: Status.CONCLUIDA, value: Status.CONCLUIDA },
];

export function Filters({ currentFilter, onChange }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {filterOptions.map((option) => {
        const active = currentFilter === option.value;

        return (
          <button
            key={option.value}
            type="button"
            className={`w-full sm:w-auto px-4 py-2 rounded-lg transition ${
              active
                ? "bg-violet-600 text-white"
                : "bg-white border text-slate-700 hover:border-violet-600"
            }`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
