export const Status = {
    PENDENTE: 'Pendente',
    CONCLUIDA: 'Concluída'
} as const;

export type Status = typeof Status[keyof typeof Status];

export type taskModel = {
    id: number,
    title: string,
    description: string,
    status: Status,
    due_date: number
}