import { useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showMessage } from "../../adapters/showMessage";

export function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLogged");
    showMessage.success("Sessão finalizada com sucesso");
    navigate("/");
  }

  return (
    <aside className="w-full lg:w-64 bg-white border-b border-slate-200 lg:border-b-0 lg:border-r p-6 flex flex-col">
      <div>
        <h1 className="text-2xl font-bold text-violet-600">
          TaskManager
        </h1>

        <div className="mt-8 p-4 bg-slate-100 rounded-xl flex flex-col gap-3 sm:flex-row sm:items-center">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <div>
            <p className="font-medium">
            Usuário Teste
          </p>
          <p className="text-sm text-slate-500">
            dev@example.com
          </p>
          </div>
        </div>
      </div>

      <div className="flex-1" />

      <button
        type="button"
        onClick={handleLogout}
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