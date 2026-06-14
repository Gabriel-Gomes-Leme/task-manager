export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Minhas Tarefas
        </h2>

        <p className="text-slate-500 mt-1">
          Organize e acompanhe suas atividades
        </p>
      </div>

      <button
        className="
          bg-violet-600
          text-white
          px-5
          py-3
          rounded-xl
          font-medium
          hover:bg-violet-700
          transition
        "
      >
        Nova Tarefa
      </button>
    </header>
  );
}