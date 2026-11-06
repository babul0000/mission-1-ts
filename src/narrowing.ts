//type of
let x = 123;

console.log(typeof x);

//type guard

const print = (value: string | number) => {
    if(value == "string"){
    return value.toUpperCase();
        
    }else{
        return value;
    }
}

//truthiness
type user = {
    name: string,
    address: {
        street: string
    }
} | null;

const loggedIn: user = {
    name: "mir",
    address: {
        street: "abc"
    }
}

const showAddress = (user: user) => {
    if(user){
    console.log(user!.address.street);
    return;
}
throw new Error("user not found");

}