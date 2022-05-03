"use strict";
const h4 = document.querySelector('h4');
console.log(h4 === null || h4 === void 0 ? void 0 : h4.textContent);
// using the optional chaining syntax "?." to check if the "h4" is not null
const div = document.querySelector('div');
// we used the "!" after the querySelector function to tell typescript that the variable surely isn't null
console.log(div.innerHTML);
const anch = document.querySelector('.google-anchor-tag');
// type casting - setting the type of the variable using the "as" keyword
console.log(anch);
