export enum TStatus {
    Created,
    Completed,
    Failed,
    Expired
}

export interface ITodo {
    id ?: any;
    content: string;
    status: TStatus;
    description ?: string;
    createAt?: any;
    expiresAt?: any;
}
