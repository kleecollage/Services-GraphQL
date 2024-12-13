export class Counter {
    constructor() {
        this._count = 0;
    }
    increment() {
        this._count++;
        return this._count;
    }
    decrement() {
        this._count--;
        return this._count;
    }
    get count() {
        return this._count;
    }
}
