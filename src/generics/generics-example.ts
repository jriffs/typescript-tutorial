/* 
-> Generics help you re-use the same block of code, but with different types. this means that you can:
- use the same code(logic) to work on any type.
-> A generic is specified by "<...>" where the "..." can be anything (most often capital letter 'T')  
*/

const addUID = <T extends object>(obj: T) => {
    let UID = Math.floor(Math.random() * 100)
    return { ...obj, UID }
}

const docOne = addUID({ name: 'paul', age: 25 })
/* 
-> currently the generic type "T" alows/accepts a value of "any" type for the obj parameter.
- to defeat that, we specify what kind of generic type "T" is by adding the extends keyword.
- the Generic type also helps to capture the value given along with all its properties.
*/

// console.log(docOne.age) -> 25

// Using Generic types with Interfaces

interface cart<T> {
    name: string,
    date: Date,
    data: T
}

const shopping_cart_1: cart<string[]> = {
    name: 'walmart',
    date: new Date,
    data: ['fruits', 'veggies', 'toilettries']
}

/* 
-> in the case of interfaces, the type specification is done when creating the object 
- as seen above☝
*/

const shopping_cart_2: cart<{ item: string }> = {
    name: 'IKEA',
    date: new Date,
    data: {item: 'pasteries'}
}

console.log(shopping_cart_1)
console.trace(shopping_cart_2)


