'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase=(str)=>{
let str2=str.slice(0,1).toUpperCase()
for (let i=1;i<str.length;i++){
  if(str.slice(i,i+1)!=="\ "){
  str2=str2+str.slice(i,i+1)
}else{
  str2=str2+'\ '+ str.slice(i+1,i+2).toUpperCase()
  i++
}
}
  return str2
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('How are you'),('How Are You'))



// End of tests */
