"use strict";
let firstVar = 'first variable in test';
console.log(firstVar);
function area(length, breadth) {
    return length * breadth;
}
console.log(area(10, 20));
function volume({ length, breadth, height }) {
    return length * breadth * height;
}
console.log(volume({ length: 10, breadth: 8, height: 21 }));
let arr1 = [];
arr1.push('nate');
arr1.push(25);
arr1.push(['steady', 'ready', 'go', 10]);
arr1[4] = { name: 'nate', age: 8 };
console.log(arr1);
let obj1;
obj1 = {
    Tagname: 'somn',
    duration: 100
};
obj1 = {
    proceed: 'yam',
    amount: 100
};
console.log(obj1);
let obj2;
obj2 = {
    Tagname: 'somn somn',
    duration: 10,
};
console.log(obj2);
let firstFunction;
firstFunction = () => {
    console.log('typescript tutorial');
};
const secondFunction = (name, age, hobbies) => {
    return 'my friends name is ' + name + ' and he is ' + age + ' years old';
};
// the extra param "hobbies" is optional cuz of the "?" appended in front. 
console.log(secondFunction('paul', 26));
const greet = (name, hobbies) => {
    return `my name is ${name} and my hobbies are ${hobbies}`;
};
console.log(greet('jerry', ["cycling", "hiking"]));
// function signatures ...
let play;
play = (song, action) => {
    if (['play', 'pause', 'stop'].includes(action)) {
        console.log(`${song} has been ${action}ed`);
    }
    return;
};
play('joro by wizkid', 'play');
