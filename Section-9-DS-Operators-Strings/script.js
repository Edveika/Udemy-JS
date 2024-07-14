"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  // thuesday
  [weekDays[3]]: {
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
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // ES6 enhanced obj literal
  // Stores openingHours obj into openingHours var
  openingHours,

  // ES6 dont need ffunctionunction expression
  order(i_startMenu, i_mainIndex) {
    return [this.starterMenu[i_startMenu], this.mainMenu[i_mainIndex]];
  },

  orderDelivery({ time, address, startIndex = 0, mainIndex = 0 }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your paste with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(
      `Main ingredient: ${mainIngredient}, other ingredients: ${otherIngredients}`
    );
  },
};

//
// Maps pt2
//

const question = new Map( [
  ["question", "what is the best coding language"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Try again :("],
]);

console.log(question);


//
// Maps
//

// const rest = new Map();
// rest.set("name", "italija");
// rest.set(1, "picerija");
// rest.set(2, "restoranas");
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 12)
//   .set("close", 23)
//   .set(true, "we are open")
//   .set(false, "we are closed");

// console.log(rest);

// console.log(rest.get(true));
// console.log(rest.get(false));

// const time = 21;

// console.log(rest.get(time <= rest.get("close") && time >= rest.get("open")));

// // removes value by key
// rest.delete(2);

// // removes everything
// // rest.clear();

// const arr = [1, 2];

// // has to be a variable, so it refers to same place in memory
// rest.set(arr, "test");

// // has to be a variable, so it refers to same place in memory
// console.log(rest.get(arr));

//
// Sets
//

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);

// console.log(ordersSet);

// // strings are iterables
// console.log(new Set("Edvinas"));

// console.log(ordersSet.size);

// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// // Only one will be added
// ordersSet.add('Bread');
// ordersSet.add('Bread');
// ordersSet.delete('Bread');

// // Deletes everything
// // ordersSet.clear();

// // Iterate over set
// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];

// // Make unique array of staff
// const uniqueStaff = [...new Set(staff)];

// console.log(uniqueStaff);

// // Get length of a set directly
// console.log(new Set('Edvinas').size);

//
// Object looping
//

// // Property names
// const properties = Object.keys(openingHours);
// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   console.log(day);
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property values
// const values = Object.values(openingHours);

// for (const value of values) {
//   console.log(value);
// }

// // Entire obj
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open}, close at ${close}`);
// }

//
// Optional chaning (?.)
//

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // same as. if mon exist, open will print. otherwise undefined will be returned
// console.log(restaurant?.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   console.log();
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day} we are open at ${open}`);
// }

// // optional chaining on functions
// console.log(restaurant.orderRizz?.(0, 1) ?? "method doesnt exist");

// // array optional chaining
// const users = [{ name: "Edvis", email: "sjd@gmail.com" }];

// console.log(users[0]?.name ?? "user arr empty");

//
// For of loop
//

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // index and element
// for (const item of menu.entries()) {
//   console.log(item);
// }

// // index and element destructure
// for (const [index, item] of menu.entries()) console.log(index, item);

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

// for (let i = 0; i < books.length; ++i) {
//   books[i].edition ||= 1;
// }

// for (let i = 0; i < books.length; ++i) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// 8 - for of loop

// let pageSum = 0;
// for (const book of books) {
//   pageSum += book.pages;
// }
// console.log(`Total pages: ${pageSum}`);

// const allAuthors = [];
// for (const book of books) {
//   if (typeof book.author === "object") allAuthors.push(...book.author);
//   else allAuthors.push(book.author);
// }
// console.log(allAuthors);

// for (const author of allAuthors.entries()) {
//   console.log(author[0] + 1, author[1]);
// }

// 9 - Enhanced object literals

// const bookData = [
//   ["title", "Computer Networking: A Top-Down Approach"],
//   ["author", ["James F. Kurose", "Keith W. Ross"]],
//   ["publisher", "Addison Wesley"],
// ];

// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
//   // ...
// };
// console.log(newBook);

// const pages = 880;

// const newBook2 = {
//   title: "The C Programming Language",
//   author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
//   pages,
// };
// console.log(newBook2.pages);

// 10 - optional chaining

// function getFirstKeyword(book) {
//   return book.keywords?.[0];
// }

// for (const book of books) {
//   console.log(getFirstKeyword(book));
// }

// 11 - looping objects

// const entries = [];
// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push(key);
// }
// console.log(entries);

// for (const [index, value] of Object.entries(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index] = value;
// }
// console.log(entries);

// const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries, entries2);

//
//
// Challange #1
//
//

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.

// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')

// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,scorers[scorer]
//   },
// };

// const players1 = game.players[0];
// const players2 = game.players[1];

// console.log("Team1:");
// console.log(players1);
// console.log(players2);

// const [gk, ...others] = players1;

// console.log("Goal keeper: ", gk);
// console.log("Others: ", others);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// function printGoals(...players) {
//   for (let i = 0; i < players.length; ++i) console.log(players[i]);
//   console.log(`Goal count: ${players.length}`);
// }

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.players[0]);
// printGoals(...game.players[1]);

// team1 < team2 && console.log("Team1");
// team2 < team1 && console.log("Team2");

//
// Challange #2
//

// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// for (const [index, name] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${name}`);
// }

// // 2.
// let avgOdd = 0;
// for (const value of Object.values(game.odds)) {
//   avgOdd += value;
// }
// avgOdd /= Object.values(game.odds).length;
// console.log(avgOdd);

// // 3.
// for (const [team, odd] of Object.entries(game.odds))
//   team === "x"
//     ? console.log(`Odd of draw: ${odd}`)
//     : console.log(`Odd of victory ${team}: ${odd}`);

// // 4.
// let scorers = {};
// for (const scorer of game.scored) {
//   scorers[scorer] ? ++scorers[scorer] : (scorers[scorer] = 1);
// }

// console.log(scorers);

//
// Practice: Sets
//

// let allKeywords = [];

// for (const book of books) allKeywords.push(...book.keywords);

// // Unique keywords
// console.log(allKeywords);

// // Turn array to set
// let uniqueKeywords = new Set(allKeywords);

// uniqueKeywords.add("coding");
// uniqueKeywords.add("science");
// uniqueKeywords.delete("business");

// console.log(uniqueKeywords);

// // add set values to array
// let uniqueKeywordsArr = [...uniqueKeywords];

// console.log(uniqueKeywordsArr);

// // clear the set
// uniqueKeywords.clear();

//
// Practice: Maps
//

// const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);

// bookMap.set('pages', 464);

// console.log(bookMap);

// console.log(`"${bookMap.get('title')} by ${bookMap.get('author')}"`)

// console.log(bookMap.size)

// if (bookMap.get('author')) console.log('The author of the book is known');
