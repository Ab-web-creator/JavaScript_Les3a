// You're going to write functions that we can reuse to check a list of students' final grades. You will have to iterate over the numbers (how do you go about that?),
// but also need to find a way to bundle what you collect somewhere. This way you will discover how to deal with scope. Be sure to check out the EdHub chapter on for-loops!
// Tip: you are not allowed to use built-in object methods here, so you don't have to worry about that.


const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Assignment 1: Cum Laude */
console.log("[------------- Opdracht 1 ---------------]")
/* 1a: Write script */
// The administration needs to know how many students graduated cum laude this block (8 or higher).
// Special diplomas have to be ordered for that.
// First write out the steps to check this and ask yourself the following things:
// * How can I check every value of the array for this condition?
// * How do I make this work even when the array contains 100 entries?
// * How do I make sure that when I come across a grade that meets the condition,
// I have somewhere to keep track of it?
// Log the response in the terminal.


let numberOfGraduatedStudents = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        numberOfGraduatedStudents++
    }
}
console.log("[The result without a function:] " + numberOfGraduatedStudents + " students.")



// ---- Expected outcome: 6
console.log("[------------- Opdracht 1b ---------------]")

/* 1b: Define to a reusable function */
// Write a function called cumLaude that expects an array of grades (such as grades) and returns the number of Cum Laude students. Use your answer from 1a for this.
// Make sure your function also works if we want to check another array of final digits, like for example: [6, 4, 5] or [8, 9, 4, 6, 10].
// Log the response in the terminal.

function howManyPassed(grades) {
    let numberOfGraduatedStudents = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            numberOfGraduatedStudents++
        }
    }
    return numberOfGraduatedStudents
}
const outcomeResult = howManyPassed (grades)
console.log("       [The result from the function now:] " + outcomeResult + " students.")

const outcomeResult2 = howManyPassed ([6, 4, 5])
console.log("       [The result from the second group:] " + outcomeResult2 + " students.")

const outcomeResult3 = howManyPassed ([8, 9, 4, 6, 10])
console.log("       [The result from the third* group:] " + outcomeResult3 + " students.")

// ---- Expected outcomes:
// cumLaude(grades) returns 6
// cumLaude([6, 4, 5]) returns 0
// cumLaude([8, 9, 4, 6, 10]) returns 3




/* Assignment 2: Average grade */
console.log("[------------- Opdracht 2 ---------------]")

/* 2a: Write script */
// The student administration has to recalculate every block what the average final grade is, but we start with the grades array from above.
// First write out the steps to calculate this and ask yourself the following things:
// * How is an average calculated?
// * What should I collect from the array of numbers to finally calculate an average?
// * How do I ensure that I can go through all the values in the array, even if the array contains 100 entries?
// Log the response in the terminal.

// ---- Expected result: 6.642857142857143


/* 2b: Define to a reusable function */
console.log("[------------- Opdracht 2b ---------------]")

// Write a function called averageGrade that expects an array of grades (such as grades) and returns the average grade. Use your answer from 2a for this.
// Make sure your function also works if we want to check another array, like for example: [6, 4, 5] or [8, 9, 4, 6, 10].
// Log the response in the terminal.

// ---- Expected outcomes:
// averageGrade(grades) returns 6.642857142857143
// averageGrade([6, 4, 5]) returns xxxx
// averageGrade([8, 9, 4, 6, 10]) returns xxxx


/* 2c: Round to two decimal places */
console.log("[------------- Opdracht 2c ---------------]")

// Ensure that the average grade returned from the function is neatly rounded to two decimal places.
// Tip: Google is your best friend!




/* Bonus assignment: highest grade */
console.log("[------------- Bonus assignment: 3a ---------------]")

/* 3a: Write script */
// Write a script that checks the highest grade obtained based on the grades array (above). You may not use existing methods for this. Write out the steps first and ask yourself the following things:
// * How can I go through each value of the array?
// * What condition should I check for?
// * How do I make sure that when I come across a grade that meets the condition, I can save it somewhere?
// Log the response in the terminal.

// ---- Expected outcome: 9


/* 3b: Define to a reusable function */
console.log("[------------- Bonus assignment: 3b ---------------]")
// Write a function called highestGrade that expects an array of grades (such as grades) and returns the highest grade. Use your answer from 3a for this.
// Make sure your function also works if we want to check another array, like for example: [6, 4, 5] or [8, 9, 4, 6, 10].
// Log the response in the terminal.

// ---- Expected outcomes:
// highestGrade(grades) returns 9
// highestGrade([6, 4, 5]) returns 6
// highestGrade([8, 9, 4, 6, 10]) returns 10


















// Answers

// opdracht 2

// stap 1 cijfers verzamelen van grades, bij elkaar optellen

// let total = 0


// for (let i = 0; i < grades.length; i++) {

// total += grades[i];
// }

// stap 2 bereken gemiddelde


// const average = total / grades.length;


// stap 3 log het antwoord

// console.log("Gemiddelde eindcijfer: " + average)


// ---- Verwachte uitkomst: 6.642857142857143


// // keyingisi
// const roundedAverage = average.toFixed(2);
// console.log("Gemiddelde eindcijfer: " + roundedAverage);






// // keyingisi
// function getEmailDomain (emailAddress) {
//     const startDomain = emailAddress.indexOf("@");
//     const domain = emailAddress.slice(startDomain + 1);
//     return domain;
//     }
    
//     console.log(getEmailDomain("n.eeken@novi-education.nl"));
//     console.log(getEmailDomain("t.mellink@novi.nl"));
//     console.log(getEmailDomain("a.wiersma@outlook.com"));




//     // next

//     function typeOfEmail (emailAddress) {
//         const startDomain = emailAddress.indexOf("@");
//         const domain = emailAddress.slice(startDomain + 1);
        
//         switch (domain) {
//         case "novi-education.nl":
//         return "student";
//         case "novi.nl":
//         return "Medewerker";
//         default:
//         return "Extern";
//         }
//         }
//         console.log(typeOfEmail("n.eeken@novi-education.nl"));
//         console.log(typeOfEmail("t.mellink@novi.nl"));
//         console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
//         console.log(typeOfEmail("a.wiersma@outlook.com"));

//     // or 

// function typeOfEmail (emailAddress) {


// switch (true) {

// case emailAddress.includes("@novi-education.nl"):

// return "student";

// case emailAddress.includes("@novi.nl"):

// return "Medewerker";

// default:

// return "Extern";

// }

// }

// console.log(typeOfEmail("n.eeken@novi-education.nl"));

// console.log(typeOfEmail("t.mellink@novi.nl"));

// console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));

// console.log(typeOfEmail("a.wiersma@outlook.com"));

// // yoki bumi

// function typeOfEmail(emailAddress) {   
//     if (emailAddress.includes("@novi-education.nl")) {     
//         return "Student";   
//     } 
//     else if (emailAddress.includes("@novi.nl")) {
//         return "Medewerker";
//     } else {
//         return "Extern";   
//     } } 
    
//     console.log(typeOfEmail("n.eeken@novi-education.nl"));
//     console.log(typeOfEmail("t.mellink@novi.nl"));
//     console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
//     console.log(typeOfEmail("a.wiersma@outlook.com"));