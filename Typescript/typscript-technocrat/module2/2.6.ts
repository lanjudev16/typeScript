{
    //
    interface constrainType {
        name: string; id: number; email: string
    }
    const course: string = "Next Level Web development";
    const addCourseToStudent = <T extends constrainType>(studentInfo: T) => {
        return {
            ...studentInfo,
            course
        }
    }
    interface userDetailsInfo {
        name: string;
        age: number;
        email: string
        id: number
    }
    const userDetailsInfoObj = { name: "Md Lanju Mia", email: "lanjumia16@gmail.com", age: 24, id: 19111116 }
    const userDetailsInfoObj1 = { name: "Md Lanju Mia", email: "lanju", age: 24, id: 19111116, isHired: true }
    const student1 = addCourseToStudent<userDetailsInfo>(userDetailsInfoObj)
    const student2 = addCourseToStudent<userDetailsInfo>(userDetailsInfoObj1)
    //
}