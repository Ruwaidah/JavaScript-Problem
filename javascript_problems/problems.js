/* repeat
 * Write a function called repeat, which accepts a string (str) and a number (multipler) and returns a new string with the input string repeated that number of times.
 * Do not use the built in repeat method - the tests will fail if you do!
 *
 * Hint: make sure that it returns an empty string if the multiplier is 0.
 */

function repeat(str, multipler) {
  let newStr = "";
  for (let i = 1; i <= multipler; i++) newStr = newStr + str;
  return newStr;
}

/* removeFromString
 * Write a function called removeFromString, which accepts a string (str), a starting index (index), and a number of characters (count) to remove.
 * The function should return a new string with that number of characters removed, starting from that index.
 *
 * For instance removeFromString("Adam", 2, 2) would return the result "Ad". Starting at the from index 2, it would remove 2 letters.
 *
 * Hint: Remember to use zero based indexing. With zero based indexing, the first position is accessed with a 0, the second position is accessed with a 1, etc.
 */

function removeFromString(str, index, count) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === index) {
      i = index + count - 1;
      continue;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

/* reverse
 * Write a function called reverse, which accepts an array (arr) and returns the same array with all of the values reversed.
 * Do not solve this by creating a new array. You must return the original array.
 * Note: returning the same array is called an in-place operation, since no additional space is used.
 * https://en.wikipedia.org/wiki/In-place_algorithm
 * Do not use the built in Array.reverse() function!
 *
 * Hint: use variables in your for loops to hold the values of the numbers in the array, to avoid creating a new array.
 *
 */

function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let value = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = value;
  }
  return arr;
}

/* min
 * Write a function called min , which accepts an array (arr) and returns the lowest number in that array.
 *Do not use the built in Math.min() function!
 */

function min(arr) {
  let minNum = arr[0];
  for (let i of arr) {
    if (i < minNum) minNum = i;
  }
  return minNum;
}

/*
*
* Write a function called slice, which accepts an array of numbers (arr), and two numbers (start, stop). 
* The function should return a new array with the elements starting at the index of the first number and going until the index of the second number. 
* The new array should EXCLUDE (not include) the value at the second index. 
* If the third second number is greater than the length of the array, it should slice until the end of the array. 
* Do not use the built in Array.slice() function!

* Hint: Remember to use zero based indexing. With zero based indexing, the first position is accessed with a 0, the second position is accessed with a 1, etc.
*/

function slice(arr, start, stop) {
  let newArr = [];
  for (let i = start; i < stop && i < arr.length; i++) newArr.push(arr[i]);
  return newArr;
}

/*
    *Write a function called keys, which accepts an object (obj) and returns an array of all of the keys in the object. 
    *Do not use the built in Object.keys() function!

    *Hint: Only focus on the keys, not the values.
*/

function keys(obj) {
  const arr = [];
  for (let key in obj) arr.push(key);
  return arr;
}

/*
    Write a function called values, which accepts an object (obj) and returns an array of all of the values in the object. 
    Do not use the built in Object.values() function!
    
*/

function values(obj) {
  const arr = [];
  for (let key in obj) arr.push(obj[key]);
  return arr;
}

/*
    Write a function called swapKeyAndValue which accepts an object (obj) and a key (key). 
    The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged. 

    Please note: we have left a return value for this function. If this fuction returns a null or undefined value, it will affect the other tests in this suite.
    
*/

function swapKeyAndValue(obj, key) {
  let newObj = {};
  for (let k in obj) {
    if (k === key) {
      let value = obj[key];
      newObj[value] = k;
    } else newObj[k] = obj[k];
  }
  return newObj;
  // return "need to complete";
}

// Section Two: Problem Solving

/* In this section you will be asked to put together the things you have been taught in ways that you have not encountered yet.
    This is a common problem in programming. Nearly everything you encounter in the real world will not match perfectly with any lesson plan. 
    You will need to think logically about the tools at your disposal, and use research aids such as Google and StackOverflow in order to unblock yourself.
    Remember, you have your TAs, mentor, and peer commnuity to ask questions to.
    You can do this, even if it seems challenging. The challenge is part of the experience of being a programmer. 
    Even people who have been coding for decades face new problems they need to think about in new ways.
*/

/*
    Implement a function called multiples that accepts two numbers: x and n. 
    The function should return an array of the first n multiples of the number x. 
    Assume that x is a positive integer.

    Hint: Think about how you'd use for loops and the number n in order to arrive at the correct solution.
*/

function multiples(x, n) {
  let arr = [];
  let num;
  let value;
  if (typeof x === "object") {
    arr = [x[0]];
    num = x[1];
    value = x[0];
  } else {
    arr = [x];
    num = n;
    value = x;
  }
  for (let i = 1; i < num; i++) {
    arr.push(arr[i - 1] + value);
  }
  return arr;
}

/*
    Write a function called pluck, which takes an array of objects (arr) and the name of a key (key). 
    The function should return an array containing the value associated with that key for each object, or -1 if that key is not present in the object.

    Hint: This is the most complicated problem you've been presented so far in the course. If it seems too complicated to tackle, break it down into it's component parts. 
    You need to do several things. You need to iterate over an array to access each object contained in the array. You need to have some way to quickly and easily access this object or it's keys.
    You then need to search inside that object to see if it has the key you are looking for. Finally, you need to add this key to your return array, or -1, and repeat with the next index.

    You can do this! If your first, or even your second, solution don't work - that's totally normal! Keep working through it :)
*/

function pluck(arr, key) {
  let newArr = [];
  for (element of arr) {
    if (element[key]) newArr.push(element[key]);
  }
  return newArr;
}
/*
    Write a function called twoHighest that takes an array of numbers (arr) and returns the two highest numbers within the array.  
    The returned value should be an array in the following format: [secondHighest, highest]. 
    The order of the numbers passed in could be any order. Do not use the build in sort() method - the tests will fail!

    Hint: This will be similar to the max function you completed earlier, but with additional complexity. 
*/

function twoHighest(arr) {
  let highest = arr[0];
  let secondHighest = arr[0];
  for (element of arr)
    if (element > highest) {
      secondHighest = highest;
      highest = element;
    }

  return [secondHighest, highest];
}

/*
    Write a function called minMaxKeyInObject that accepts an object (obj) with numeric integer keys. 
    The function should return an array of numbers with the following format: [lowestKey, highestKey]. Remember all object keys are strings, even if they hold numeric values.

    Hint: you must convert the strings into integers before searching for the highest and lowest values.

*/

function minMaxKeyInObject(obj) {
  let arr = [];
  for (let key in obj) {
    if (arr.length < 1) arr = [Number(key), Number(key)];
    else if (arr[1] < key) arr[1] = Number(key);
    else if (arr[0] > key) arr[0] = Number(key);
  }
  return arr;
}

/*
    Write a function called stringFromObject that generates a string from an object's key/value pairs. 
    The format should be "key = value, key = value". Note the spacing around the = and ensure that you have the same spacing in your code.
    Each key/value pair should be separated by a comma and space except for the last pair.
    For instance {a: "1'", b: "2"} would be represented as "a = 1, b = 2"

    At this point in these exercises, we would like to ask you to think critically about how to approach this problem without a hint.
*/

function stringFromObject(obj) {
  let string = "";
  // for (let key in obj) {
  //   if (string === "") string = `${key} = ${obj[key]}`;
  //   else string += `, ${key} = ${obj[key]}`;
  // }
  // return string;

  // OR
  for (let key in obj) string += `${key} = ${obj[key]}, `;
  return string.slice(0, string.length - 2);
}

/* 
    Write a function called countNumbers, which accepts an array of strings (arr) and returns a count of the number of strings in the array that can be converted into a number. 
    For example, if you are given the array ["11", "hello", "gard3n", "20"] you would return 2, as "11" and "20" can be converted into numbers.
    
    At this point in these exercises, we would like to ask you to think critically about how to approach this problem without a hint.

*/

function countNumbers(arr) {
  let count = 0;
  for (element of arr) if (Number(element)) count++;
  return count;
}
