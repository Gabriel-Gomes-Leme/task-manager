export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col">
      <div>
        <h1 className="text-2xl font-bold text-violet-600">
          TaskManager
        </h1>

        <div className="mt-8 p-4 bg-slate-100 rounded-xl">
          <p className="font-medium">
            Usuário Teste
          </p>

          <p className="text-sm text-slate-500">
            dev@example.com
          </p>
        </div>
      </div>

      <div className="flex-1" />

      <button
        className="
          w-full
          py-3
          rounded-xl
          bg-red-50
          text-red-600
          font-medium
          hover:bg-red-100
        "
      >
        Sair
      </button>
    </aside>
  );
}