abstract class Employee {

    constructor(
        public name: string,
        protected _baseSalary: number,
    ) { }

    get baseSalary(): number {
        return this._baseSalary;
    }


    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("sallary cannot be begativale")
        }
        this._baseSalary = newSalary;
    }
abstract calculatePay(): number;
abstract getResources(): string;
abstract registerEntryTime(): string;
}

class Manager extends Employee {
    calculatePay() {
        return this._baseSalary + 5000;
    }
}
class Developer extends Employee{
    calculatePay() {
       return this._baseSalary + 3000;
    }
}