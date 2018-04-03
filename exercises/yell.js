'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */
 const yell=(str)=>{
   return str.toUpperCase()
 }

 //* Begin of tests
 const assert = require('assert')



 assert.strictEqual(typeof yell, 'function')
 assert.deepStrictEqual(yell('abc'), 'ABC')
 assert.deepStrictEqual(yell('Abc'), 'ABC')
 assert.deepStrictEqual(yell('ABc'), 'ABC')
 assert.deepStrictEqual(yell('ABC'), 'ABC')




// End of tests */
