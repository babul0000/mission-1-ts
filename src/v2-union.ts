//literal type

type status = "pending"

const status : status = "pending"
console.log(status);

//basic union

type role = "admin" | "user"
const role : role = "admin"
console.log(role);


//literal union

type identity = string | number

const id : identity = "babul"
console.log(id);


//object union

type house = {id: number, role: "admin", privilages: string[]}
type car = {id: number, role: "user", service: string[]}

type name = house | car
const name : name ={id: 123, role: "user", service: ["hello", "hie"] }
console.log(name);
