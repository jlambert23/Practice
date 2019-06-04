export class Utility {
    conostructor() {}

    public static timer(func: Function, ...args: any[]): void {
        console.time(func.name);
        const val = func(...args);
        console.timeEnd(func.name);
        return val;
    }
}
