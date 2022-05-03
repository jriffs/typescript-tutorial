"use strict";
/*
-> Enums are a way in typescript to store numerical values as descriptive items.
*/
var Description;
(function (Description) {
    Description[Description["book"] = 0] = "book";
    Description[Description["author"] = 1] = "author";
    Description[Description["publisher"] = 2] = "publisher";
    Description[Description["reader"] = 3] = "reader";
})(Description || (Description = {}));
const itemOne = {
    name: 'tears of the sun',
    description: Description.book,
    date: new Date
};
const itemTwo = {
    name: 'paul bishop',
    description: Description.author,
    date: new Date
};
console.log(itemTwo);
// enums are indexed from "0" so "Descriction.author" would yeild "1" 
