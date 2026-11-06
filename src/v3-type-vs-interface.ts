type ID = number

type Role = "admin" | "user"

interface user  {
name : string
id: ID;
Role: Role;
}


//need to extends use 

interface bike {
    model: string
}
interface car extends bike {
    price: number
}

const cat : car ={
    model: "honda",
    price: 7345 
}

//need & symbol

type t = {
    shirt: string
}
type s = t & {
    price: number
}

const total : s ={
    price: 734584,
    shirt : "gen"
}

interface I {
    name: string
}
interface I {
    price: number
}

const nam : I ={
    name: "babul",
    price: 873453
}