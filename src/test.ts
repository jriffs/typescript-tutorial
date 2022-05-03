let firstVar = 'first variable in test'
console.log(firstVar)

function area(length: number, breadth: number) {
    return length * breadth
}

console.log(area(10, 20))

function volume({ length, breadth, height }: { length: number, breadth: number, height: number }) {
    return length*breadth*height
}

console.log(volume({length: 10, breadth: 8, height: 21}))

let arr1: any[] = []

arr1.push('nate')
arr1.push(25)
arr1.push(['steady', 'ready', 'go', 10])
arr1[4] = { name: 'nate', age: 8 }

console.log(arr1)

let obj1: object

obj1 = {
    Tagname: 'somn',
    duration: 100
}
obj1 = {
    proceed: 'yam',
    amount: 100
}
console.log(obj1)

let obj2: {
    Tagname: string,
    duration: number
}

obj2 = {
    Tagname: 'somn somn',
    duration: 10,
}

console.log(obj2)

let firstFunction: Function

firstFunction = () => {
    console.log('typescript tutorial')
}

const secondFunction = (name: string, age: number, hobbies?: string | string[]): string => {
    return 'my friends name is ' + name + ' and he is ' + age + ' years old'
}
// the extra param "hobbies" is optional cuz of the "?" appended in front. 

console.log(secondFunction('paul', 26))

// type alias
type strORarr = string | (string | any[])[]

const greet = (name: string, hobbies: strORarr) => {
    return `my name is ${name} and my hobbies are ${hobbies}`
}

console.log(greet('jerry', ["cycling", "hiking"]))

// function signatures ...
let play: (a: string, b: string) => void

play = (song: string, action: string) => {
    if (['play', 'pause', 'stop'].includes(action)) {
        console.log(`${song} has been ${action}ed`)
    }
    return
}
play('blow my mind by davido', 'play')