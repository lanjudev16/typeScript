class Animal {
//    public name: string;
//    public species: string;
//    public sound: string
    constructor(public name: string,public species: string,public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound() {
        console.log(`This is ${this.name} and sound ${this.sound}`);
    }
}
const dog = new Animal("king", "khalif", "mea")
dog.makeSound()