
// const printAll = ( x: string | string[] | null) => {
// if(x && typeof x == "object"){
// for(let str of x) {
//     console.log(str);
    
//     } 
// }else{
//     console.log(x);
    
// }

// };
// printAll(null)

const printAll = (x: string | string[] | null) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    } else {
        console.log(x);
    }
};

printAll(null);
printAll("Babul");
printAll(["HTML", "CSS", "JavaScript"]);

//equality 

const compare = (x: number | string, y: number | boolean) => {
    if(x == y) {
        console.log(x, y);
        
    }
};

const printAl = (x: string | string[] | null) => {
    if(x !== null) {
        if (typeof x == "object") {
            for(let str of x) {
            console.log(str);
        }
        console.log(x);
        return
            
        }
        console.log(" ");
        return
    }
}
printAl("sdvfc h")

//inOperator

type bird = {fly: () => void}
type fish = {swim: () => void}

const move = (animal: bird | fish) => {
    if ( "fly" in animal) {
        animal.fly();
        return
    }
    animal.swim();
}

//instanceof union
const showDate = (x: Date | string) => {
    if( x instanceof Date) {
        console.log(x.toLocaleString());
        return
    }
    const date = new Date(x);
    console.log(date.toISOString());
    
}