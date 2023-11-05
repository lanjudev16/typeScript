// mapped types

const arrOfNumbers: number[] = [1, 4, 5];

const arrOfStrings: string[] = arrOfNumbers.map((number) =>
  number.toString()
);
console.log(arrOfStrings);

type AreaNumber={
    height:string;
    width:string
}
type AreaString<T>={
    [index in keyof T]:T[index]
}

const area1:AreaString<{height:number,width:number}>={
    height:100,
    width:20
}