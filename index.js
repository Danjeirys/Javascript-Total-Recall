// I. Variables & Datatypes
// To answer these questions, you can add them in a multiline comment section inside of script.js

// like this:

/*
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a...
...
*/


// A. Q + A
// How do we assign a value to a variable?

// Answer - let/const = whatever you the want the value of the variable to be

// How do we change the value of a variable?

// Answer - by calling opun the variable and assigning it a new value

// How do we assign an existing variable to a new variable?

// Answer - by calling the variable and assigning a value to the new variable

// Remind me, what are declare, assign, and define?

// Answer - Declare means to give a variable a name to be called upon, to assign means to give said variable a value, Define is where is located global or local scope

// What is pseudocoding and why should you do it?

// Answer - pseudocoding is just writing out your thought process on how you gonna go about writing your code while also making sure its commented out

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// Answer - About 30-40% to 60-70% to coding and debugging

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable

// Answer - let firstVariable

// Assign it the value of the string "Hello World"

// Answer - firstVariable = 'Hello World'

// Change the value of this variable to some number

// Answer - firstVariable = 25

// Store the value of firstVariablein a new variable called secondVariable

// Answer - let secondVariable = firstVariable 

// Change the value of secondVariableto any string.

secondVariable = 'How you doing.'

// What is the value of firstVariable?

// Answer - The value of firstVariable is a string data type storing the string 'Hello World'

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

let yourName = 'Jerry'
// console.log (`Hello, my name is ${yourName}`) // Answer

// ex: Hello, my name is Jean Valjean


// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false && false && false && false || true);
//   console.log(false == false)
//   console.log(e === 'Kevin');
//   console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 == '48');


// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else

// let animal = 'cow'

// Write code that will print out "mooooo" if the it is equal to cow

// if (animal === 'cow') {
//     console.log ('moooo')
// }

// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."

// if (animal === 'chicken') {
//     console.log ('moooo')
// }else {
//     console.log ('Hey! You"re ot a cow.')
// }

// Commit


// E. Driver's Ed
// Make a variable that holds a person's age; be semantic

// let age = '18'

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// if (age >= '16') {
//     console.log ('Here are the keys!')
// }else {
//     console.log ('Sorry, you"re to young.')
// }


// II. Loops
// Remember: USE letwhen you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive

// for (let i = 0; i < 11; i++) {
//     console.log (i)
// }

// Write a loop that will print out all the numbers from 10 up to and including 400

// for (let i = 10; i <= 400; i++) {
//     console.log (i)
// }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for (let i = 12; i <= 4000; i+= 3) {
//     console.log (i)
// }


// B. Get even
// Print out the numbers that are within the range of 1 - 100

// for (let i = 1; i <= 100; i++) {
//     console.log (i)
// }

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log (i + '<-- is an even number')
//     }else {
//         console.log (i) 
//     }
// }


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

// for (let i = 0; i <= 100; i++) {
//     if (i % 5 === 0 && i % 3 ===0) {
//         console.log (i + ' I found a number. High five!')
//     }else if (i % 5 ===0){
//         console.log (i + ' I found a number, High five!')
//     }else if (i % 3 === 0) {
//         console.log (i + ' Three is a crowd')
//     }
// }


// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// let bank_account = 0

// for(let i = 0; i <= 10; i++) {
//     bank_account += i 
// }

// console.log (bank_account)

// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

// let bank_account = 0

// for (let i = 1; i <= 100 ; i++) {
//     bank_account += i * 2
// }

// console.log (bank_account)

// Check your work! Your bank_account should have $10,100 in it.


// III. Arrays & Control flow



// A. Talk about it:
// What are the things in an array called?

// Answer - The things in an array are called elements

// Do Arrays guarantee those things will be in order?

// Answer - No because as you play with the array and add more code you switch up the order

// What real-life thing could you model with an array?

// Answer - You can model just about everything in an array


// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

// const arr = ['Isn"t it scare, what a smile can hide', 'How can you destroy a monster without becoming one?', 'Loving a person isn"t about logic or reaon']
// let quotes = arr


// C. Accessing elements
// Given the following array 
const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?

// Answer - console.log (randomThings[0])

// Change the value of "Hello"to "World"

randomThings[2] = 'World'

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// console.log (randomThings)


// D. Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?

// console.log (ourClass[2])

// Change the value of "Github" to "Octocat"

ourClass[4] = 'Octocats'

// Add a new element, "Cloud City" to the array

ourClass.push ('Cloud City')

// console.log (ourClass)

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

myArray.push ('Aegon', 'anime')

// Remove the 5from the beginning of the array.

myArray.shift ()
// console.log(myArray)

// Add the string "Bob Marley"to the beginning of the array.

myArray.unshift ('Bob Marley')
// console.log (myArray)

// Remove the string of your choice from the end of the array.

myArray.pop ()
// console.log (myArray)

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

myArray.reverse ()
// console.log (myArray)
// yes
// Changes the form of an array


// F. Biggie Smalls
// Create a variable that contains an integer.

let num = 10

// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.

// if (num < 100) {
//     console.log (' little number')
// }else {
//     console.log (' big number')
// }


// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// if (num < 5) {
//     console.log ('little number')
// }else if (num > 10) {
//     console.log ('big number')
// }else {
//     console.log ('monkey')
// }


// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log ('Kristyn is rocking that ' + kristynsCloset[2])

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

kristynsCloset.splice (6, 0, 'raybans' ) 
// console.log (kristynsCloset)

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

kristynsCloset[5] = 'stained knit hat'
// console.log (kristynsCloset)

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

// console.log ('Thoms is wearing ' + thomsCloset[0][0])

// In the same way, access one item from Thom's pants array.

// console.log ('Thoms is wearing ' + thomsCloset[1][1])

// Access one item from Thom's accessories array.

// console.log ('Thoms is wearing ' + thomsCloset[2][2])

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log ('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' + thomsCloset[1][1] + ' ' + thomsCloset[2][2])

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = 'Footie Pajamas'
// console.log ('Thom is wearing ' + thomsCloset[0][3] + ', ' + thomsCloset[1][2] +  ' ' + thomsCloset[2][0])



// IV. Functions


// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

function printGreeting(name) {
    return `Hello my name is ${name}`
}

// console.log (printGreeting('Jerry'))


// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

function printCool (name) {
    return `Hello my name is ${name}`
}

// console.log (printCool('Jay') + ' is cool!')


// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube (num) {
    num *= num * num
    return num
}

// console.log (calculateCube(10))


// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

let vowel = 'aeiou'

function isVowel (char) {
    for (let i = 0; i < vowel.length; i++) {
        if (char.toLowerCase() === vowel[i]) {
            return true
        }
    }
    return false
}

// console.log (isVowel('u'))


// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

let string = []

function getTwoLengths (str1, str2) {
    string.push (str1.length, str2.length)
    return string
}

// console.log (getTwoLengths('Jay', 'Jerry'))


// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

let string2 = []

function getMultipleLengths (arr) {
    arr.forEach ((str) => {
        string2.push (str.length)
    })
    return string2
}

// console.log (getMultipleLengths(['Jay', 'Jerry', 'Tali', 'Mother']))


// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

let maxOfThree = (num1, num2, num3) => {
    let moreThan = 0
    if (num1 > num2) {
        moreThan = num1
    }else {
        moreThan = num2
    }
    return moreThan >= num3 ? moreThan: num3
}

// console.log (maxOfThree(350, 400, 800))


// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

let word = []

function printLongestWord (arr) {
    let lWord = arr[0]
    let lWordNum = arr[0].length

    for (let i = 1; i < arr.length; i++) {
        if ( lWordNum < arr[i].length) {
            lWord = arr[i]
            lWordNum = arr[i]
        }
    }

    return lWord
}

// console.log (printLongestWord(['Sorry', 'for', 'party', 'rocking']))


// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


// A. Make a user object
// Create an object called user.

// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

let user = {
    name: 'Jerry',
    email: 'Jerry@gmail.com',
    age: '18',
    purchased: []
}

user.location = ('The Bronx')

user.email = ('Jerry2@gmail.com')
// user.age++

user.purchased.push ('carbohydrates', 'peace of mind', 'Merino jodhpurs')

// console.log (user)
// console.log (user.purchased[2])


// E. Object-within-object

user.friend = {
    name: 'Ray',
    age: '18',
    location: 'The Bronx',
    purchased: []
}

// console.log (user.friend.name)
// console.log (user.friend.location)

user.friend.age = ('55')
user.friend.purchased.push ('The One Ring ', 'A latte')

// console.log (user.friend.purchased[1])

function userList (arr) {
    arr.purchased.forEach ((x) => {
        console.log (x)
    })
}

function friendsList (arr) {
    arr.friend.purchased.forEach ((z) => {
        console.log (z)
    })
}

// console.log (user.purchased)
// console.log (user.friend.purchased)

// G. Functions can operate on objects

// function updateUser () {
//     user.age++
//     user.name = user.name.toUpperCase()
// }

// updateUser()
// console.log (user)

function oldAndLoud (person) {
    person.age++
    person.name = person.name.toUpperCase()
}

oldAndLoud(user)
oldAndLoud(user.friend)
// console.log (user)
// console.log (user.friend)


// Cat Combinator

let cat1 = {
    name: 'Mittins',
    breed: 'Birman',
    age: '15'
}

console.log (cat1.age)
console.log (cat1.breed)

let cat2 = {
    name: 'Puffs', 
    breed: 'Birman', 
    age: '18'
}

function combineCats (mama, papa) {
    return  {
        name: mama.name + papa.name,
        age: '1',
        breed: mama.breed + '-' + papa.breed
    }
}

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))),combineCats(cat1, cat2)))
