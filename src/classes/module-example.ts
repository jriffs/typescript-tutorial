import { Invoice } from '../classes/class-example.js'
/* import statement in typescript as opposed to the traditional "require()" statement in nodeJS
** you also have to change the module prop in the "tsconfig" file from "commonJS" to "es20xx"
** you also have to specify a ".js" extension to import from instead of ".ts"
*/

const inv1 = new Invoice('paul', 1000, 'my t-fare')
if ("name" in inv1) {
    console.log('client is there')    
}
console.log(inv1)
