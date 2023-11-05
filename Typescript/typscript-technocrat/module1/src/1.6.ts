const add=(a:number,b:number=10):number=>a+b
add(10)
const poorUser={
    name:"Md Lanju",
    age:25,
    ballance:0,
    addBallance(ballance:number):string{
        return `My new ballance is ${this.ballance+ballance}`
    }
}
const array:number[]=[1,2,3,4]
const newArray:number[]=array.map((element:number):number=>element*element)
let num=[1,2,3,4]