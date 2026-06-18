import { Status, type taskModel } from "../models/taskModel";

export const tasks: taskModel[] = [
   {
    id: 1,
    title: "Implementar autenticação",
    description: "Criar validação de login e proteção de rotas",
    status: Status.PENDENTE,
    due_date: new Date("2026-07-05").getTime(),
  },
  {
    id: 2,
    title: "Finalizar dashboard",
    description: "Adicionar filtros, modal de tarefas e responsividade",
    status: Status.CONCLUIDA,
    due_date: new Date("2026-07-10").getTime(),
  },
];
