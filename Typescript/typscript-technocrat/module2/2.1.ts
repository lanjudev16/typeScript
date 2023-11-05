let anything: any
anything = "Next level developer"
anything = true;
(anything as boolean)

const kgToGm = (value: string | number) => {
    if (typeof value === "string") {
        let convertedValue: number;
        convertedValue = parseFloat(value) * 1000
        return `The converted value is ${convertedValue}`
    }
    if (typeof value === "number") {
        return value * 1000
    }
}
const result1=kgToGm("1") as string
const result2=kgToGm(1) as number
type CustomType={
    message:string
}

try{
    
}
catch(error){
    console.log((error as CustomType).message);
}