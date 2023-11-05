{
    //utility type

    //pick
    type Person={
        name:string;
        age:number;
        email?:string;
        contact:string;
    }
    // "name" | "age" | "email" soman keyof Person
    type NameAge=Pick<Person,keyof Person>
    //omit
    type OmitType=Omit<Person,"name" | "contact">
    //required
    type RequiredType=Required<Person>
    //partial
    type PartialType=Partial<Person>
    //read only
    type ReadOnlyType=Readonly<Person>
    const userInfo:ReadOnlyType={
        name:"Md Lanju",
        age:25,
        contact:"021"
    }
    // userInfo.name="Md Ali"
    //record
    type RecordType=Record<string,unknown>
    const obj:RecordType={
        name:"md Lanju"
    }
    const MyObjInfo:Record<string,unknown>={
        name:"md Lanju",
        age:25
    }

}