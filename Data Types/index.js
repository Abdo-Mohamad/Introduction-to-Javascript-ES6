/* provides a variety of data types, which can be broadly categorized into primitive and non-primitive types. Here's a list of data types:

### Primitive Data Types
1. **String**: Represents textual data. */

let name = "John";


/* 2. **Number**: Represents both integer and floating-point numbers.
 */
let age = 25;
let temperature = 36.6;


/* 3. **Boolean**: Represents logical values: `true` or `false`.
 */
let isStudent = true;


/* 4. **Null**: Represents the intentional absence of any object value.
 */
let car = null;


/* 5. **Undefined**: Indicates that a variable has not been assigned a value.
 */
let address;


/* 6. **Symbol** (ES6): Represents a unique and immutable identifier. */

let sym = Symbol('unique');


/* 7. **BigInt** (ES11): Represents integers with arbitrary precision. */

let bigNumber = 1234567890123456789012345678901234567890n;


/* ### Non-Primitive Data Types (Objects)
1. **Object**: A collection of key-value pairs. */

let person = {
    name: "John",
    age: 30
};


/* 2. **Array**: An ordered list of values. */

let numbers = [1, 2, 3, 4, 5];


/* 3. **Function**: A block of code designed to perform a particular task.
 */
function greet() {
    console.log("Hello, World!");
}


/* 4. **Date**: Represents date and time.
 */
let now = new Date();


/* 5. **RegExp**: Represents regular expressions. */

let regex = /ab+c/;

console.log(regex);
/* 6. **Error**: Represents an error. */

let error = new Error("Something went wrong");

/* s flexible and dynamic typing system allows for a variety of operations and interactions between these data types. */

console.log(typeof(error));