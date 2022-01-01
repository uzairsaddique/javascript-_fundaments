# JavaScript Interview Questions
data type in javascript 

 1- primitive data types

In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

2-NonPrimitivedata type 
Objects such as functions and arrays are referred to as non-primitive values.
type of nonprimitive value 
object 
array
function 
RegExp

Mutable values are those which can be modified after creation
Immutable values are those which cannot be modified after creation


It is important to note here that the variable in which the primitive value is stored can still be reassigned a new value as shown in Example 1, but the existing value can not be changed as shown in Example 2. A primitive value can be replaced, but it can't be directly altered



example#1
let string = "this is the string";
string = 'hello world';
console.log(string); //out put is hello world

example#2
let string = "this is the string";
string[0]= 'T'
console.log('string');
