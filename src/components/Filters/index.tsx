export function Filters() {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-violet-600 text-white">
        Todas
      </button>

      <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white border">
        Pendentes
      </button>

      <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white border">
        Concluídas
      </button>
    </div>
  );
}