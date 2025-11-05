// let score = "33"

// console.log(typeof score);

// let numberscore = Number(score)  // Convert to number

// console.log(typeof numberscore);

// let score = "33aa"

// console.log(typeof score);

// let numberscore = Number(score)  // Convert to number

// console.log(typeof numberscore);

// console.log(numberscore);       // Gives NaN as output

// let score = null

// console.log(typeof score);         // Object

// let scoreconv = Number(score)

// console.log(typeof scoreconv);    // Number

// console.log(scoreconv);          // 0

// let score = undefined

// console.log(typeof score);         // undefined

// let scoreconv = Number(score)

// console.log(typeof scoreconv);    // Number

// console.log(scoreconv);          // NaN

let score = true

console.log(typeof score);         // Boolean

let scoreconv = (Number)(score)

console.log(typeof scoreconv);    // Number

console.log(scoreconv);          // 1


/* input    output    type-before  type-after(Number(var_name))

   "33"      33        string             number
   "33abc"   Nan       string             number
   "true"    1         boolean            number
   "null"    0         object             number
"undefined"  NaN      undefined           number

                                  type-after(Boolean(var_name))
        
    1      true        Boolean            Boolean
    ""     false       string             Boolean
  "Soum"   true        string             Boolean 

*/