// interface user {
//     name: string,
//     role: string
// }
// interface blog {
//     tittle: string,
//     description: string
//     date: string
// }

// interface apiResponse <t> {
//     date: t;
//     success: boolean;
//     status: number
// }

// const fetchUser = async (): Promise<user> => {

//     try {
//         const res = await fetch("/api/v1/response")
//     const data = await res.json() as apiResponse<user>;
//     if(!res.ok || !data.success){
//         throw new Error(`faild fetch  user data: ${data.status}`);
//     }
//     } catch (error) {
//         if(error instanceof Error){
//             console.log(error.message);
            
//         }else{
//             console.log("somethimes went wrong");
            
//         }
//     }
    
    
// }

// const userData = await fetchUser();

// if (userData) {
//     console.log(userData.name);
//     ;
// }