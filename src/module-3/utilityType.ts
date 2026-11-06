// partial

interface User {
    id: string;
    name: string;
    email: string
}

const updateProfile = (id: string, data: Partial<User>) => {

}

updateProfile("rum", {name: "babul"})

// required

interface Config {
    apiKey?: string;
    timeOut?: number;

}

const initialize = ( config: Config) => {

}

initialize({apiKey: "hdgfcdj", timeOut: 30000

})


// pick

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}

type productPtreview = Pick<Product, "name" | "description">
const preview: productPtreview = {
    name: "abc",
    description: "efg"
};

// omit

interface Employee {
    id: string;
    name: string;
    salary: number;
    nid: string;
}

type publicEmployee = Omit<Employee, "salary" | "nid">; 

const directoryEntry: publicEmployee = {
    id: 23,
    name: "babul",
    salary: 30000,
    nid: "7834yt"
}

// record

type Environment = "development" | "staging" | "production";

interface IEnvironment {
    development: string;
    staging: string;
    production: string;
    
}
const apiUrls: Record<Environment, string> = {
    development: "7853834584674",
    staging: "347t5897rt45",
    production: "78345hf7yr"
}