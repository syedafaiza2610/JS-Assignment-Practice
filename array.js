// Declare an empty array using JS literal notation to store 
// student names in future.

// var studentsName = [];
// studentsName.push();
// studentsName.push();
// studentsName.push();
// studentsName.push();

// . Declare an empty array using JS object notation to store 
// student names in future.

// var studentsName = {};


// 3. Declare and initialize a strings array.
// var name1;
// name1 = ["Faiza","Saba", "Hira" , "Uzma"];

// 4. Declare and initialize a numbers array.
// var num;
// num = [1,2,3,4,5,6,7];

// 5. Declare and initialize a boolean array.

// var bool;
// bool = ["true","false"];

// 6. Declare and initialize a mixed array
// var mixed;
// mixed = ["faiza","Saba",24 , 26,"false"];
// alert(mixed)

// 7. Declare and Initialize an array and store available mobile 
// networks in Pakistan.
// var networks;
// networks = ["Ufone","Jazz","Zong","Telenor"];

// 8. Declare and Initialize an array and store available education 
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, 
// M. Phil., PhD). Show the listed qualifications in your browser 
// like:

// var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// for (var i = 0; i < qualifications.length; i++) {
//   document.write((i+1) + ") " + qualifications[i] ,"<br>");
// }


// 9. Declare and initialize an empty array to store top movies of 
// 2015. Add movies one by one in an array. Display the elements 
// & length of array in your browser. (Use array’s length method)

// var movies = [];
// movies.push("Age of Altron");
// movies.push("Tiger");
// movies.push("Jawan");
// movies.push("Spider");
// movies.push("Inside Out");
// for (var i = 0; i < movies.length; i++) {
//   document.write((i+1) + ") " + movies[i] ,"<br>"); 
// }
//   document.write("The Length of an array is " + " "+ movies.length);

// 10. Declare and Initialize an array with your favorite cars. Show 
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// ARRAYS |	JAVASCRIPT
// Page	3 of	8
// d. Car at last index of the array

// var favoriteCars = ["Audi","Mehran","Farari","Lamborghini"];
// var firstIndex = 0;
// var carAtFirstIndex = favoriteCars[firstIndex];
// var lastIndex = favoriteCars.length - 1;
// var carAtLastIndex = favoriteCars[lastIndex];
// document.write("a. First index of the array: " + firstIndex); 
// document.write("b. Car at first index of the array: " + carAtFirstIndex);
// document.write("c. Last index of the array: " + lastIndex);
// document.write("d. Car at last index of the array: " + carAtLastIndex);

// . Write a program to store 3 student names in an array. Take 
// another array to store score of these three students. Assume 
// that total marks are 500 for each student, display the scores & 
// percentages of students like:
// var studentNames = ["John", "Alice", "Bob"];
// for (var i = 0; i < studentNames.length; i++) {
//   var studentName = studentNames[i];
//   var studentScore = studentScores[i];
//   var percentage = (studentScore / 500) * 100;

//   document.write("Student: " + studentName);
//   document.write("Score: " + studentScore);
//   document.write("Percentage: " + percentage.toFixed(2) + "%");
//   document.write();
// }


// 12. Initialize an array with color names. Display the array 
// elements in your browser.
// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & 
// add that color to the end of the array. Display the updated 
// array in your browser.
// c. Add two more color to the beginning of the array. Display 
// the updated array in your browser.
// ARRAYS |	JAVASCRIPT
// Page	4 of	8
// d. Delete the first color in the array. Display the updated 
// array in your browser.
// e. Delete the last color in the array. Display the updated 
// array in your browser.
// f. Ask the user at which index he/she wants to add a color & 
// color name. Then add the color to desired position/index. 
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your 
// browser
        // var colorArray = ["Red", "Green", "Blue"];
        // document.write("Initial Array: " + colorArray.join(", ") + "<br>");
        // var colorToAddStart = prompt("Enter a color to add to the beginning:");
        // colorArray.unshift(colorToAddStart);
        // document.write("After adding to the beginning: " + colorArray.join(", ") + "<br>");
        // var colorToAddEnd = prompt("Enter a color to add to the end:");
        // colorArray.push(colorToAddEnd);
        // document.write("After adding to the end: " + colorArray.join(", ") + "<br>");
        // colorArray.unshift("Yellow", "Purple");
        // document.write("After adding two more colors to the beginning: " + colorArray.join(", ") + "<br>");
        // colorArray.shift();
        // document.write("After deleting the first color: " + colorArray.join(", ") + "<br>");
        // colorArray.pop();
        // document.write("After deleting the last color: " + colorArray.join(", ") + "<br>");
        // var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
        // var colorToAdd = prompt("Enter the color name to add:");
        // colorArray.splice(indexToAdd, 0, colorToAdd);
        // document.write("After adding a color at index " + indexToAdd + ": " + colorArray.join(", ") + "<br>");


// Function to input student scores
// function inputStudentScores() {
//   const scores = [];
//   while (true) {
//     const score = prompt("Enter a student score (or 'q' to quit):");
//     if (score === 'q' || score === null) {
//       break;
//     }
//     const numericScore = parseFloat(score);
//     if (!isNaN(numericScore)) {
//       scores.push(numericScore);
//     } else {
//       alert("Invalid input. Please enter a valid number.");
//     }
//   }
//   return scores;
// }

// // Main program
// const studentScores = inputStudentScores();

// if (studentScores.length > 0) {
//   studentScores.sort(function (a, b) {
//     return a - b;
//   });

//   console.log("Sorted student scores in ascending order: ", studentScores);
// } else {
//   console.log("No student scores entered.");
// }
