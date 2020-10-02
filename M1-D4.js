/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
const areaOfRectangle = (l1, l2) => {
  const area = l1 * l2;
  return area;
};

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
const crazySum = (x, y) => {
  if (x === y) {
    return 3 * (x + y);
  } else {
    return "two values are not the same";
  }
};
console.log(crazySum(30, 30));
/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
const crazyDiff = (x) => {
  const y = x - 19;
  const absDiff = Math.abs(y);
  if (x > 19) {
    return 3 * absDiff;
  } else {
    return absDiff;
  }
};
console.log(crazyDiff(21));
/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */
const boundary = (N) => {
  if ((N > 20 && N <= 100) || N === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(101));
/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.

/* WRITE YOUR CODE HERE */
const strivify = (S) => {
  if (S.slice(0, 6) === "Strive") {
    return S;
  } else {
    return "Strive" + S;
  }
};
console.log(strivify("boy is coming"));
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
const check3and7 = (num) => {
  if (num > 0) {
    if (num % 3 === 0 && num % 7 === 0) {
      console.log(num + " is a multiple of three and seven");
    } else if (num % 3 === 0) {
      console.log(num + " is a multiple of 3");
    } else if (num % 7 === 0) {
      console.log(num + " is a multiple of 7");
    } else {
      console.log(num + " is not a multiple of 3 or 7");
    }
  } else {
    console.log(num + " is not positive.");
  }
};
console.log(check3and7(28));
/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
const reverseString = (val) => {
  return val.split("").reverse().join("");
};
console.log(reverseString("Jerusalem"));
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */
const upperFirst = (str) => {
  const splitWord = str.split(" ");
  const myWord = [];
  for (let i = 0; i < splitWord.length; i++) {
    myWord.push(
      splitWord[i].charAt(0).toUpperCase().concat("", splitWord[i].substr(1))
    );
  }
  const x = myWord.join(" ");
  console.log(x);
};

upperFirst("do you have food to eat today?");

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
/* WRITE YOUR CODE HERE */
const cutString = (str) => {
  return str.slice(1, str.length - 1);
};
console.log(cutString("strive"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */
const randomNum = [];
const giveMeRandom = (n) => {
  for (let i = 0; i < n; i++) {
    randomNum.push(Math.floor(Math.random() * 10));
  }
  return randomNum;
};

console.log(giveMeRandom(5));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
