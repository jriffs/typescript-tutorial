/* 
-> Enums are a way in typescript to store numerical values as descriptive items.
*/

enum Description {
    book,
    author,
    publisher,
    reader
}

const itemOne = {
    name: 'tears of the sun',
    description: Description.book,
    date: new Date
}

const itemTwo = {
    name: 'paul bishop',
    description: Description.author,
    date: new Date
}

console.log(itemTwo)

// enums are indexed from "0" so "Descriction.author" would yeild "1" 
