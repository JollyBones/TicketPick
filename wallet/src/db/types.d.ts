export interface Wallet {
    id: number;
    user_id: number;
}

const CREATED_WALLET = "CREATED_WALLET";
const DEPOSITED_FUNDS = "DEPOSITED_FUNDS";
const WITHDREW_FUNDS = "WITHDREW_FUNDS";

export const EventTypesList = {
    CREATED_WALLET,
    DEPOSITED_FUNDS,
    WITHDREW_FUNDS
} as const;

export type EventType = keyof typeof EventTypesList;

export interface Events {
    id: string;
    wallet_id: number;
    version: number;
    event_type: EventType;
    payload: object;
}
