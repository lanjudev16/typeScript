{

    type Student={
        name: string;
        age: number;
        id: number;
        contact: string;
    }
    const student1: Student= {
        name: "Md Lanju Mia",
        age: 24,
        id: 19111116,
        contact: "016299"
    }
    const student2:Student = {
        name: "Ayesha akter",
        age: 20,
        id: 1911,
        contact:"15566"
    }
    //for number type alias
    type Add=(num1:number,num2:number)=>number
    const add:Add=(num1,nub2)=>nub2*num1
}