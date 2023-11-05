
type CustomErrorType = {
    message: string
}
const createPromise = ():Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data = "Something"
        if (data) {
            resolve(data)
        } else {
            reject("Data not found")
        }


    })
}
const showData = async () => {
    const result = await createPromise()
    console.log(result);
}
showData()

interface Todo{
    userId:number;
    id:number;
    title:string;
    completed:boolean
}

const getDataJson=async ():Promise<Todo>=>{
    const url="https://jsonplaceholder.typicode.com/todos/1"
    const res=await fetch(url)
    const data=await res.json()
    return data
}
getDataJson()