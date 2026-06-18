import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form";
import { user } from "../../data/user";
import { showMessage } from "../../adapters/showMessage";

export function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(email: string, password: string) {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!email.trim() || !password.trim()) {
      showMessage.error("Por favor, preencha todos os campos");
      setIsLoading(false);
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      showMessage.error("E-mail inválido");
      return;
    }

    if (email === user.email && password === user.password) {
      localStorage.setItem("isLogged", "true");
      showMessage.success("Acessando TaskManager");
      navigate("/dashboard");
      return;
    }

    showMessage.error("Credenciais inválidas");
    setIsLoading(false);
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

        <Form onSubmit={handleLogin} isLoading={isLoading} />

      </div>
    </main>
  );
}
