class Employee {
    name: string;
    baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}

const employee = new Employee("babul", 8765464);
const employee2 = new Employee("hello", 784569);

console.log(employee instanceof Employee);
console.log(employee2 instanceof Employee);
