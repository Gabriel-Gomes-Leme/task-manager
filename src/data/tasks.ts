import { Status, type taskModel } from "../models/taskModel";

export const tasks: taskModel[] = [
  {
    id: 1,
    title: 'Ir ao mercado',
    description: 'Fazer as seguintes compras: Arroz, Feijão e Carne',
    status: Status.CONCLUIDA,
    due_date: new Date('2026-06-30').getTime(),
  },
  {
    id: 2,
    title: 'Estudar React',
    description: 'Aprender desde os hooks até rotas',
    status: Status.PENDENTE,
    due_date: new Date('2026-06-30').getTime(),
  },
];
