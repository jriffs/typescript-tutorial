export class Person {
    name: string
    age: number
    hobbies: string[]

    constructor(n: string, a: number, h: string[]){
        this.age = a
        this.hobbies = h
        this.name = n
    }

    sayName(){
        return `my name is ${this.name}, i am ${this.age} years old. My hobbies are ${this.hobbies.forEach(hobby => `${hobby} `)}`
    }
}


const person1 = new Person('keels', 10, ['drawing, singing'])

const ppl: Person[] = []
// this tells typescript that we only want to allow Person objects into ppl array.

/*Access Modifiers*/
export class Invoice {
    
    constructor(public client: string, private amount: number, readonly details: string) {
        /* This is a shorthand method of declaring object properties, the parameters are 
        -- automatically assigned to the object as properties. 
        * public means can be accessed and changed from anywhere in the code
        * private means cannot be accessed or changed from outside the class
        * readonly means it can be accessed outside the class, but it cannot be changed from 
        -- outside or inside the class
        */ 
    }
    
} 