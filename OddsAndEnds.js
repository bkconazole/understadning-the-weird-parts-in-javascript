/**
 * typeof, instanceof
 * 
 * using typeof helps to identify the type of a primitive or object types
 * but it has some quirks
 */

 var a = 5
 console.log(typeof a)      //number 

 var b = 'javascript'
 console.log(typeof b)      //string

 var c = {}
 console.log(typeof c)      //object

 var d = []
 console.log(typeof d)      //object, not useful + weird!!!!
 console.log(Object.prototype.toString.call(d))     //[object Array] , better

 // function constructor 
 function Person(name) {
     this.name = name
 }
 var e = new Person('jane')
 console.log(typeof e)      //object, not helpful
 console.log(e instanceof Person) //helpful: goes down the prototype chains and verifies if 
                                  //goes down proto to proto ... and if it finds a type of Person object

console.log(typeof undefined)   //undefined, obviously
console.log(typeof null)        //object, it's been a bug for a long time 
