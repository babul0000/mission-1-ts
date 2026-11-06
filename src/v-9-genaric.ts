const wrap = <T>(value: T) => {
    return { value };
}

const string = wrap<string[]>(["abc", "def", "ghi"]);

const result = string.value.map((item) => item.toUpperCase());

console.log(result);

interface user {
    name: string,
     role: string
}
interface blog {
    tittle: string,
    description: string
    date: string
}

interface apiResponse <t> {
    date: t;
    success: boolean;
    status: number
}
type userResponse = apiResponse<user>;
type blogResponse = apiResponse<blog>;

const userRes: userResponse = {
    status: 200,
    success: true,
    date: {
        name: "kolim",
        role: "sorif"
    }
}