import { Status, type taskModel } from "../models/taskModel";

export const tasks: taskModel[] = [
  {
    id: 1,
    title: 'Criar Interface de Login',
    description: 'Criar toda a estrutura, estilizar e fazer funcionar',
    status: Status.PENDENTE,
    due_date: new Date('2026-06-30').getTime(),
  },
];
