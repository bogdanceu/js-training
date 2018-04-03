'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */
 const keepFirst=(str)=>{

   return str.slice(0,2)
 }


 const keepLast=(str)=>{

   return str.slice(str.length-2,str.length)
 }


 const keepFirstLast=(str)=>{
   return str.slice(0,2) + str.slice(str.length-2,str.length)
 }

 //* Begin of tests
 const assert = require('assert')

 assert.strictEqual(typeof keepFirst, 'function')
 assert.strictEqual(keepFirst('wildcod'),'wi')
 assert.strictEqual(typeof keepLast, 'function')
 assert.strictEqual(keepLast('wildcod'),'od')
 assert.strictEqual(typeof keepFirstLast, 'function')
 assert.strictEqual(keepFirstLast('wildcod'),'wiod')


// End of tests */
