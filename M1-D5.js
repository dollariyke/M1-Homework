/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/
/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/
const myString = "I am happy to see you";
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/
let varSum = 0;
for (let i = 11; i < 20; i++) {
  varSum = varSum + i;
}
console.log(varSum);
/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/
const randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);
/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
const Me = {
  name: "Ikemba",
  Surname: "Nwawom",
  Age: "34",
};

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/
delete Me.Age;
/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/
Me.skills = ["HTML", "CSS", "JavaScript", "SQL"];

console.log(Me);
/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/
delete Me.skills[3];
console.log(Me);

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/
const Dice = (min, max) => {
  return Math.floor(Math.random() * max) + 1;
};
console.log(Dice(1, 6));

/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/
const WhoIsBigger = (a, b) => {
  return Math.max(a, b);
};
console.log(WhoIsBigger(78, 77));
/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/
const SplitMe = (str) => {
  return str.split(" ");
};
console.log(SplitMe("I am going to school today"));
/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/
const DeleteOne = (str, bol) => {
  let word;
  if (bol) {
    word = str.slice(1);
  } else {
    word = str.slice(0, str.length - 1);
  }
  return word;
};

console.log(DeleteOne("striver", true));
/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
/*
const OnlyLetters = (str) => {
  const splitStr = str.split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    if (typeOf(parseInt(splitStr[i])) === "Number") {
    }
  }
};
console.log(
  OnlyLetters("I love 123 whatever")
);
*/

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/
const IsThisAnEmail = () => {};
/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/
const WhatDayIsIt = () => {
  const myDate = new Date();
  const day = myDate.getDay();
  let weekDay;
  switch (day) {
    case 0:
      weekday = "Sunday";
      break;
    case 1:
      weekday = "Monday";
      break;
    case 2:
      weekday = "Tuesday";
      break;
    case 3:
      weekday = "Wednesday";
      break;
    case 4:
      weekday = "Thursday";
      break;
    case 5:
      weekday = "Friday";
      break;
    case 6:
      weekday = "Saturday";
      break;

    default:
      return "out of range";
      break;
  }
  return weekday;
};
console.log(WhatDayIsIt());
/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
const RollTheDices = (n) => {
  const myObj = {};
  let add;
  let opt = [];

  for (let i = 0; i < n; i++) {
    let diceRoll = Dice(1, 6);
    opt.push(diceRoll);
    add = opt.reduce((a, b) => a + b, 0);
  }
  myObj.sum = add;
  myObj.roll = opt;
  return myObj;
};
console.log(RollTheDices(3));
/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/
const HowManyDays = (date) => {
  let todaysDate = new Date(10 / 2 / 2020);
  todaysDate.toLocaleDateString("en-US");
  let previousDate = new Date(date);
  previousDate.toLocaleDateString("en-US");
  let dateDiff = todaysDate.getTime() - previousDate.getTime();
  return dateDiff / 24;
};
console.log(HowManyDays(09 / 30 / 2020));

/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/
const IsTodayMyBDay = () => {};

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/

const DeleteProp = (obj, str) => {
  delete obj[str];
  return obj;
};

console.log(DeleteProp({ name: "ikemba", age: 25 }, "age"));

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/
const OlderMovie = () => {
  let sortByAge = movies.sort(function (p1, p2) {
    return p1.Year - p2.Year;
  });
  console.log(sortByAge[0]);
};
console.log(OlderMovie());
/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/
const CountMovies = () => {
  return movies.length;
};

console.log(CountMovies());
/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/
const OnlyTitles = (arr) => {
  const tittleArray = [];
  for (let i = 0; i < arr.length; i++) {
    tittleArray.push(arr[i].Title);
  }
  console.log(tittleArray);
};
console.log(OnlyTitles(movies));
/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/
const OnlyThisMillennium = () => {
  let result = [];
  for (i = 0; i < movies.length; i++) {
    let con = movies[i].Year;
    if (parseInt(con) >= 2000) {
      result.push(movies[i]);
    }
  }
  return result;
};
/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/
const GetMovieById = (id) => {
  const mov = movies.find((element) => element.imdbID === id);
  return mov;
};
console.log(GetMovieById("tt4154796"));
/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/
const SumYears = () => {
  let yearsSum = 0;
  for (let i = 0; i < movies.length; i++) {
    let toNum = parseInt(movies[i].Year);
    yearsSum += toNum;
  }
  return yearsSum;
};
console.log(SumYears());

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/
const SearchMovie = (str) => {
  let searchResult = [];
  for (i = 0; i < movies.length; i++) {
    let test = movies[i].Title;
    if (test.includes(str)) {
      searchResult.push(movies[i]);
    }
  }
  return searchResult;
};
console.log(SearchMovie("Avengers"));
/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/
const SearchAndDivide = (stt) => {
  let grandObj = {
    match: [],
    nonMatch: [],
  };

  for (i = 0; i < movies.length; i++) {
    let test = movies[i].Title;
    if (test.includes(stt)) {
      grandObj.match.push(movies[i]);
    } else {
      grandObj.nonMatch.push(movies[i]);
    }
    return grandObj;
  }
};

console.log(SearchAndDivide("Flies"));
/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/
const DeleteX = (num) => {
  let result = [];
  for (i = 0; i < movies.length; i++) {
    let test = movies[i].Title;
    if (i === num) {
      continue;
    } else {
      result.push(movies[i]);
    }
  }
  return result;
};
console.log(DeleteX(2));
// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/
const HalfTree = () => {};
/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/
const Tree = () => {};
/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/
function IsItPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return num > 1;
    }
  }
}
console.log(IsItPrime(7));
