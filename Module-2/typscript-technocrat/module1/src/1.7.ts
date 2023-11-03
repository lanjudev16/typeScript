//spreed operator
const bros1:string[]=['Ali','Shakil']
const bros2:string[]=['Abul','kabul']
const result=[...bros1,...bros2]

//rest operator
const gratings=(...friends:string[])=>{
    friends.forEach((friend:string) => {
        console.log(friend);
    });
}