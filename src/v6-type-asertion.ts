//type assertion



//as syntax

type status = "pending" | "approve" | "rejected"


const some: string = "pending";

const show = (status: status) => {
    console.log("sknfckvfdgmcnjgh " + status);
    
}
show(some as status)

//non-null assertion
interface config {
    port?: number;
}

const config: config ={
    port: 5000
}

const currentPort : number = config.port!;


//constant assertion

const configuration = {
    prot: 8080,
    profix: "/api/v2",

} as const;