import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form";
import { user } from "../../data/user";
import { showMessage } from "../../adapters/showMessage";

export function Login() {
  const navigate = useNavigate();

  async function handleLogin(email: string, password: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!email.trim() || !password.trim()) {
      showMessage.error("Por favor, preencha todos os campos");
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      showMessage.error("E-mail inválido");
      return;
    }

    if (email === user.email && password === user.password) {
      showMessage.success("Acessando TaskManager");
      navigate("/dashboard");
      return;
    }

    showMessage.error("Credenciais inválidas");
    return;
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">TaskManager</h1>

          <p className="text-slate-500 mt-2">
            Organize suas tarefas de forma simples e eficiente
          </p>
        </div>

        <Form onSubmit={handleLogin} />

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">Usuário de teste:</p>

          <p className="text-sm text-slate-700 mt-1">dev@example.com</p>

          <p className="text-sm text-slate-700">password</p>
        </div>
      </div>
    </main>
  );
}
