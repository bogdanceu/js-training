'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */

const cutFirst=(str)=>{

  return str.substring(0,str.length-2)
}


const cutLast=(str)=>{

  return str.substring(2,str.length)
}


const cutFistLast=(str)=>{
  return str.substring(2,str.length-2)
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst('wildcod'),'wildc')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast('wildcod'),'ldcod')
assert.strictEqual(typeof cutFistLast, 'function')
assert.strictEqual(cutFistLast('wildcod'),'ldc')


// End of tests */
