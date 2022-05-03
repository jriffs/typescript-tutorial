"use strict";
/*
-> Generics help you re-use the same block of code, but with different types. this means that you can:
- use the same code(logic) to work on any type.
-> A generic is specified by "<...>" where the "..." can be anything (most often capital letter 'T')
*/
const addUID = (obj) => {
    let UID = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { UID });
};
const docOne = addUID({ name: 'paul', age: 25 });
const shopping_cart_1 = {
    name: 'walmart',
    date: new Date,
    data: ['fruits', 'veggies', 'toilettries']
};
/*
-> in the case of interfaces, the type specification is done when creating the object
- as seen above☝
*/
const shopping_cart_2 = {
    name: 'IKEA',
    date: new Date,
    data: { item: 'pasteries' }
};
console.log(shopping_cart_1);
console.trace(shopping_cart_2);
