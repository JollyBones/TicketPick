export interface Wallet {
    id: number;
    user_id: number;
}

export interface Events {
    id: number;
    wallet_id: number;
    version: number;
    event_type: string;
    payload: object;
}