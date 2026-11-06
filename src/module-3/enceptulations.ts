
class Employee {

    constructor(
    public name: string,
    private _baseSalary: number,
) {}
    
get baseSalary(): number {
    return this._baseSalary;
}

get salaryWithBonus() : number {
    return this._baseSalary  + 5000;
}

set baseSalary(newSalary: number) {
    if (newSalary < 0)  {
        throw new Error("sallary cannot be begativale")
    }
    this._baseSalary = newSalary;
}
}

const employee = new Employee("babul", 8765464);
const employee2 = new Employee("hello", 784569);

console.log(employee instanceof Employee);
console.log(employee.salaryWithBonus);
