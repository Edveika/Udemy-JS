"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (i_startMenu, i_mainIndex) {
    return [this.starterMenu[i_startMenu], this.mainMenu[i_mainIndex]];
  },

  orderDelivery: function ({ time, address, startIndex = 0, mainIndex = 0 }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your paste with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(
      `Main ingredient: ${mainIngredient}, other ingredients: ${otherIngredients}`
    );
  },
};

//
// Logical assignment
//

// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ||= 10;

// console.log(rest1.numGuests, rest2.numGuests);

//
// Nullish operator
//

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Null and undefined(no 0 or "")
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//
// && and || operators, short circuiting
//

// Use any data type, return any data type
// SHort circuit - if 1 is true, other will not get evaluated
// console.log(3 || "Edvis");
// console.log("" || "Edvis");

// restaurant.orderPizza("mushrooms", "onion", "olives");

//
// Rest operator, rest parameters (packs array)
//

// REST because its on leftside of equal
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // rest with objects

// const { sat, ...otherDays } = restaurant.openingHours;
// console.log(sat, otherDays);

// function add(...nums) {
//   let sum = 0;

//   for (let i = 0; i < nums.length; ++i) {
//     sum += nums[i];
//   }

//   return sum;
// }

// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

//
// Spread operator ...arr(unpacks array)
//

// const arr = [7, 5, 9];

// // writes 7 5 9 after 1 2
// const newArr = [1, 2, ...arr];

// console.log(newArr);
// console.log(...newArr);

// const newMenu = ["Bomzpakiai", ...restaurant.mainMenu];
// console.log(newMenu);

// // shallow copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join arrays
// const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(fullMenu);

// console.log(..."Hello, world");

// const ingredients = [
//   prompt("ingredient 1"),
//   prompt("ingredient 2"),
//   prompt("ingredient 3"),
// ];

// restaurant.orderPasta(...ingredients);

// spread operator with objects

// const newResraurant = {
//   ...restaurant,
//   founder: "Guiseppe",
//   foundingYear: 1998,
// };
// console.log(newResraurant);

//
// Objects
//
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating vars
// let a = 1337;
// let b = 7331;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested objs
// const { open, close } = openingHours.fri;

// console.log(open, close);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Bubiai",
//   mainIndex: 0,
//   startIndex: 1,
// });

//
// Arrays
//

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);

// // Skips one element
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Will swap values
// [main, secondary] = [secondary, main];

// // Returns 2 values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [values, , array] = nested;
// console.log(values, array);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Set default values
// const [p = 1, q = 1, r = 1] = [2, 3];
// console.log(p, q, r);

//
// Practice assignment
//

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// 1 - ARRAYS

//const [firstBook, secondBook] = books;

// console.table(firstBook);
// console.table(secondBook);

// const [, , thirdBook] = books;

// console.table(thirdBook);

// const ratings = [
//   ["rating", 4.19],
//   ["ratingsCount", 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStar = 0, oneStar = 0, threeStar = 0] = ratingStars;
// console.log(fiveStar, oneStar, threeStar);

// 2 - Objects

// const { title, author, ISBN } = firstBook;
// console.log(title, author, ISBN);

// const { keywords: tags } = firstBook;
// console.log(tags);

// const sixthBook = books[6];
// const { programmingLanguage: language = "unknown" } = sixthBook;
// console.log(language);

// let bookTitle = "unknown";
// let bookAuthor = "unknown";

// ({ title: bookTitle } = firstBook);
// ({ author: bookAuthor } = firstBook);

// console.log(bookTitle);
// console.log(bookAuthor);

// const {
//   thirdParty: {
//     goodreads: { rating },
//   },
// } = books[0];

// console.log(rating);

// function printBookInfo({ title, author, year = "unknown" }) {
//   console.log(`${title} by ${author}, ${year}`);
// }

// printBookInfo(firstBook);

// 3 - spread operator

// const bookAuthors = [...firstBook.author, ...secondBook.author];

// console.log(bookAuthors);

// function spellWord(str) {
//   console.log(...str);
// }

// spellWord("JavaScript");

// 4 - rest operator

// const [mainKeyword, ...rest] = books[0].keywords;
// // console.log(mainKeyword, rest);

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher);
// console.log(restOfTheBook);

// function printBookAuthorsCount(title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// }

// printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");

// 5 - short circuit

// function hasExamplesInJava(book) {
//   return book.programmingLanguage === "Java" || "No data available";
// }

// console.log(hasExamplesInJava(books[3]));

// function offersOnlineContent(books) {
//   for (let i = 0; i < books.length; ++i) {
//     books[i].onlineContent &&
//       console.log(`"${books[i].title}" provides online content`);
//   }
// }

// offersOnlineContent(books);

// function offersOnlineContent(books) {
//   for (let i = 0; i < books.length; ++i) {
//     books[i].onlineContent ??
//       console.log(
//         `"${books[i].title}" provides no data about its online content`
//       );
//   }
// }

// offersOnlineContent(books);

// 6 - Nullish operator

// for (let i = 0; i < books.length; ++i) {
//   books[i].onlineContent ??
//     console.log(`${books[i].title} provides no data about its online content`);
// }

// 7 - Logical assignment operators

for (let i = 0; i < books.length; ++i) {
  books[i].edition ||= 1;
}
