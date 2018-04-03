'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 */
const whisper=(str)=>{
  return str.toLowerCase()
}

//* Begin of tests
const assert = require('assert')



assert.strictEqual(typeof whisper, 'function')
assert.deepStrictEqual(whisper('abc'), 'abc')
assert.deepStrictEqual(whisper('Abc'), 'abc')
assert.deepStrictEqual(whisper('ABc'), 'abc')
assert.deepStrictEqual(whisper('ABC'), 'abc')

// End of tests */
