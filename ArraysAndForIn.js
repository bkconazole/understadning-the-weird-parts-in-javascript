/**
 * dangerous aside: arrays and for in
 * 
 * arrays in javascript are a bit different than other programming languages
 * arrays are objects in javascript which are a collection of key and values
 * each item in the array is a name value pair, they are effectively added properties
 * look at the following sample code
 */

 var arr = ['john', 'jae', 'doe']

 for (var prop in arr) {
     console.log(prop + ': ' + arr[prop])
 }

 /**
  * the output is: 
  * 0: john
  * 1: jae
  * 2: doe
  */

  /**
   * that is very dangerous: check this out
   */
  Array.prototype.myCustomFeature = 'uncool!'
  
  for (var prop in arr) {
    console.log(prop + ': ' + arr[prop])
  }
  
  /**
   * this will log the above output + myCustomFeature: uncool!
   * therefore, avoid the for in iteration over arrays rather use 
   * for(i... i < arr.length), it is safer
   * it won't iterate down prototypes
   */
  