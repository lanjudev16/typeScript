{
    type vehicle = {
        bike: string;
        car: string;
        ship: string
    }
    // type owner=bike | car | ship
    type owner = keyof vehicle
    const user ="bike"

    const getPropertyVlue=<X,Y extends keyof X>(obj:X,key:Y)=>{
        return obj[key]
    }
    const student1Info={
        name:"Md Lanju Mia",
        id:19111111
    }
    const student1=getPropertyVlue(student1Info,"name")
}