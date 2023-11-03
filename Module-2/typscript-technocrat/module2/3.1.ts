{
    type GenericType<T> = Array<T>;

    // const numbers: number[] = [1, 2, 3, 4, 5];
    const userNubmer: GenericType<number> = [1, 2, 3, 4, 5];
    // const userName: string[] = ['Lanju', "shakil", "Ali"];
    const userName: Array<string> = ['Lanju', "shakil", "Ali"];
    // const booleanArray: boolean[] = [true, false, true, true];
    const booleanArray: Array<boolean> = [true, false, true, true];

    // array of object

    type userObject={
        name:string;
        age:number
    }

    const userCollection:GenericType<userObject>=[
        {
            name:"Md Lanju",
            age:24
        },
        {
            name:"Shakil",
            age:24
        }
    ]

    type GenericTuple<X,Y>=[X,Y]
    type GenericObject={
        name:string,
        age:number
    }
    const student:GenericTuple<number,string>=[199,"Md Lanju"]
    const studentInfo:GenericTuple<number,GenericObject>=[1,{name:"Md Lanju Mia",age:24}]
}


