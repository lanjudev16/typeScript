{
    //
    interface UserDetails {
        name: string;
        age: number
    }
    const createArrayWithGeneric = <T, Q, O>(param1: T, param2: Q, param3: O): [T, Q, O] => {
        return [param1, param2, param3]
    };
    const userDetails = {
        name: "Md Lanju",
        age: 24
    }
    const user = createArrayWithGeneric<string, number, UserDetails>("Banglades", 19, userDetails)

    const course: string = "Next Level Web development";
    const addCourseToStudent = <T>(studentInfo: T) => {
        return {
            ...studentInfo,
            course
        }
    }
    interface userDetailsInfo {
        name: string;
        age: number;
        id: number
    }
    const userDetailsInfoObj = { name: "Md Lanju Mia", age: 24, id: 19111116 }
    const userDetailsInfoObj1 = { name: "Md Lanju Mia", age: 24, id: 19111116,isHired:true }
    const student1 = addCourseToStudent<userDetailsInfo>(userDetailsInfoObj)
    const student2 = addCourseToStudent<userDetailsInfo>(userDetailsInfoObj1)



    //
}