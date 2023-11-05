{

    type User1 = {
        name: string;
        age: number
    }

    interface user2 {
        name: string;
        age: number
    }

    type userRollWith1 = User1 & {
        roll: string
    }
    interface userRollWith2 extends user2 {
        roll: string
    }

    const user1: userRollWith1 = {
        age: 25,
        name: 'Md Lanju',
        roll: "admin"
    }
    const user2: userRollWith2 = {
        age: 25,
        name: 'Md Lanju',
        roll: "instructor"
    }

    type RollNumber = number[]
    interface RollNumber1{
        [index:number]:number
    }
    const rollNumber1: RollNumber1 = [1, 2, 3, 4, 5]

    



}