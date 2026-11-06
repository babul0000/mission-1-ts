const number = (a: number, b: number) => {
return a + b;
}

console.log(number(20, 50));

const dhaka : string[] = ['dhaka', 'khulna'];
const dhaka1 : number[] = [12763, 723854684]

const dhaka2 : readonly [string, number, boolean] = ['bangladesh', 27834,  true]



const babul = (firstName : string, lastName? : string) => { 
    if(lastName){
        console.log("babul");
        
    }
    else{
        console.log(firstName + "" + lastName);
        
    }
}
babul("rubel", "ahmed")

const grettings = ( fullName: string, greeting : String = 'babul'): void => {
console.log(greeting + "" + fullName);

}
grettings("raki")


const sum = (...number: number[]) => {
    return number.reduce((total, sum) => total + sum, 0);
}

sum(1, 2, 3, 4, 5,)

const logUserAction = (...args : [name :string, age :number, isActive :boolean]) => {
    const [name, age, isActive] = args;
    console.log(name + "is" + age);
    
}

logUserAction("rubel", 39, true);

type address = {
    location: string,
    kilometer: number
}

type user = {
name: string,
age: number,
isActive: true,
action: () => void,
badge: string[]
address: address
}

interface user2 {
name: string,
age: number,
isActive: true,
action: () => void,
badge: string[]
}

const me: user2 = {
    name: "babul",
    age: 123,
    isActive: true,
    action: () => ("hello"),
    badge: ['abd', 'bc']
}