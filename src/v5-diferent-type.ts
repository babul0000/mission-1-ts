//top type

let x : any = 13643
let y : unknown = "hello bangladesh"

//core type

let something : unknown = "hlo"
const num : number = 137595

something = num

// nullish type

interface user {
    name: string
}

type login = user | null;

const currentUser : login = null

//unit type


const greet = () => {
    console.log("hello bangladesh");
    
}

//sub type of unit type

const abothergreet = () : undefined => {
    console.log("hello bangladesh");
    return undefined;
}
//bottom type

const getError = (msg : string) : never => {
    throw new Error(msg)
}