
class Employee {

    constructor(
        public name: string,
        private _baseSalary: number,
    ) { }

    get baseSalary(): number {
        return this._baseSalary;
    }

    get salaryWithBonus(): number {
        return this._baseSalary + 5000;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("sallary cannot be begativale")
        }
        this._baseSalary = newSalary;
    }

    calculatePay(taxRate: number) {
        return this.baseSalary - this.baseSalary + taxRate;
    }
}

class Manager extends Employee {
  override calculatePay(taxRate: number) {
        return this.baseSalary + 5000;
    }
};

class Developer extends Employee {
    constructor(
        name: string,
        _baseSalary: number,
        public type: string,
    ) {
        super(name, _baseSalary);
    }

    override calculatePay(taxRate: number) {
        return this.baseSalary + 3000 - this.baseSalary * taxRate;
    }
}


const employee = new Employee("babul", 8765464);
const manager = new Manager("hello", 784569);
const developer = new Developer("hello", 784569, "backend");


console.log(employee instanceof Employee);
console.log("manager", manager.calculatePay(0.1));
