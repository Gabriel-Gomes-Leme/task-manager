export enum Status {
    PENDENTE = 'Pendente',
    CONCLUIDA = 'Concluída'
} 
export type taskModel ={
    id: string,
    title: string,
    description: string,
    status: Status,
    due_date: number
}