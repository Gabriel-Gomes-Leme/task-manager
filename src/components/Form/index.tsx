import { useState } from "react";

type FormProps={
    onSubmit: (
    email: string,
    password: string
  ) => Promise<void>;
}

export function Form({ onSubmit }: FormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await onSubmit(email, password);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          E-mail
        </label>

        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
                outline-none
                transition
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-200
              "
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Senha
        </label>

        <input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
                outline-none
                transition
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-200
              "
        />
      </div>

      <button
        type="submit"
        className="
              w-full
              bg-violet-600
              text-white
              py-3
              rounded-xl
              font-medium
              transition
              hover:bg-violet-700
              active:scale-[0.98]
              cursor-pointer
            "
      >
        Entrar
      </button>
    </form>
  );
}
