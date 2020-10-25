export class Model<T> {
    private store: T[];

    constructor() {
        this.store = [];
    }

    set(store: T[]): void {
        this.store = store;
    }

    add(entry: T): void {
        this.store.push(entry);
    }

    get(index: number): T | null {
        return this.store[index] || null;
    };
}