{
    //
    interface Developer<T, X = null> {
        name: string;
        age: number;
        bike: T;
        isAdmin?: X;
    }
    interface Bike{
        name:string;
        brand:string
    }
    interface Admin{
        admin:boolean,
        instructor:boolean
    }
    const developer1:Developer<Bike,Admin>={
        name:"Lanju",
        age:25,
        bike:{
            name:"Hero",
            brand:"Ig"
        },
        isAdmin:{
            admin:true,
            instructor:false
        }
    }
    const developer2:Developer<Bike>={
        name:"Lanju",
        age:25,
        bike:{
            name:"Hero",
            brand:"Ig"
        }
    }
    //
}