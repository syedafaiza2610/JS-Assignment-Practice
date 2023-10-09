//1. Write a program that takes input a name from user & greet the user like this:
// var userInput = prompt("Enter Your Name");
// alert("Good Morning" + " "+ userInput);


//2. Write a program to take input a number from user & display 
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by 
// default


// var userInput = +prompt("Enter Your Number");
// for (let i=1; i<=10; i++) {
//     document.write(userInput+ " " + "x" + " "+ i + " "+ "="+" "+ userInput*i ,"<br>")   
// }

//3. Write a program to take “city” name as input from user. If user 
// enters “Karachi”, welcome the user like this: “Welcome to city 
// // of lights
//  var city = prompt("Enter Your City");
// //  var city1 = "karachi";
// //  if(city === city1){
// //     alert("Welcome to City of Lights")
// //  }
// //  else{
// //     alert("Not a city")
// // }
//   var gender = prompt("Enter Your Gender");
//   gender = gender.toLowerCase();
//   if(gender == "male"){
//     alert("Good Morning Sir")
//   }
//   else if(gender == "female"){
//     alert("Good Morning Maam")
//   }
//   else{
    
//   }
//   //5. Write a program to take input color of road traffic signal from 
// the user & show the message according to this table:

// var color = prompt("Enter Your color");
// color = color.toLowerCase();
// if(color == "red"){
//   alert("Vehicle must stop")
// }
// else if(color == "yellow"){
//   alert("Vehicles should get ready to move")
// }
// else if(color == "green"){
//     alert("Vehicles can move now")
//   }
// else{ document.write("Wait")
  
// }
//6. Write a program to take input max age & current age from 
// user. If the current age is less than or equal to max age, show
// the message “You are welcome”


// var age = +prompt("Enter your current age");
// var maxAge = 40;
// if(age <= 40){
//     alert("You are welcome")
// }
// else{alert("we are sorry")}


//7. Write a program to take input remaining fuel in car (in litres) 
// from user. If the current fuel is less than 0.25litres, show the 
// message “Please refill the fuel in your car


// var feul = +prompt("Enter your current feul");
// var maxFeul = 0.25;
// if(feul <= maxFeul){
//     alert("Please refill the fuel in your car")
// }
// else{alert("you can go!")}


// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }


//  var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }

//  var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
// if (true){
//  alert("True");
// }
// if (false){
//  alert("False");
// }
//  if("car" < "cat"){
//  alert("car is smaller than cat");
// }

// 9. Write a program to take input the marks obtained in three 
// subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute grade as 
// per following table: 
// Percentage % Grade Remarks
// Greater than or equal to 80 A-one Excellent
// Greater than or equal to 70 A Good
// Greater than or equal to 60 B You need to improve
// Less than 60 Fail Sorry
// Show the total marks, marks obtained, percentage, grade & 
// remarks like
// var marksObtained = +prompt("Enter your Obtained Marks");
// var totalMarks = +prompt("Enter your Total Marks");
// var per = (marksObtained/totalMarks*100);
//  var grade = "";
//  var remarks = "";
// if(per >= 80 && per < 101){
//     grade = "A+";
//     remarks ="Excellent";
//  }
//  else if(per >=70 && per < 81){
//     grade = "A";
//     remarks ="Good";
//  }
//  else if(per >=60 && per < 71){
//     grade = "B";
//     remarks ="Fair";
//  }
//  else if(per >=50 && per < 61){
//     grade = "C";
//     remarks ="Need More Improvement";
//  }
//  else if(per >=40 && per < 51){
//     grade = "D";
//     remarks ="Not Satisfactory";
//  }
//  else if(per >= 101){
//     grade = "Invalid percentage";
//  }
//  else{
//     grade = "Fail";
//     remarks ="Sorry"
//  }

//  document.write("<h1>"+ "MarkSheet" + "</h1>"+ "<br>"+
//  "Marks Obtained :" +" "+ marksObtained + "<br>" +
//  "Total Marks :" +" "+ totalMarks + "<br>" +
//  "Percentage :" +" "+ per.toFixed(2) + "%"+ "<br>" +
//  "Grade :" +" "+ grade + "<br>" +
//  "Remarks :" +" "+ remarks+ "<br>" );
 

// //10. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Take input 
// from users, the following: 
// a. Name of item1 
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser


var item1Name = prompt("Enter the name of item1");
var item2Name = prompt("Enter the name of item2");
var item1Quantity = +prompt("Enter the quantity of item1");
var item2Quantity = +prompt("Enter the quantity of item2");
var item1price = 1000;
var item2price = 700;
var shippingCharges = 250;
var totalCostBeforeDiscount = (item1price * item1Quantity + item2price * item2Quantity) + shippingCharges;
var discount = 0.1 * totalCostBeforeDiscount;
    var totalCostAfterDiscount = totalCostBeforeDiscount - discount;
// var discount = total*10/100;

if (totalCostBeforeDiscount > 2000) {
    
    document.write("<h1>" + "A Shopping Cart" + "</h1>" + "<br>" +
"Price of item 1 " + " " + item1Name + " " + "is:" + " "+ item1price +"<br>" +
"Quantity of item 1 " + " " + item1Name + " " + "is:" + " "+ item1Quantity+ "<br>" +
"Price of item 2 " + " " + item2Name + " " + "is:" +" "+ item2price +"<br>" +
"Quantity of item 2 " + " " + item2Name + " " + "is:" + " "+item2Quantity + "<br>" +
"Shipping Charges " + " " + " " + "is:" +" "+ shippingCharges + "<br>" +"<br>"+
"Total cost of your order " + " " + "is:" + " "+totalCostBeforeDiscount+ "<br>" +
"Discounted cost of your order " + " " + "is:"+ totalCostAfterDiscount+ "<br>" 
)
}
else{
    document.write("<h1>" + "A Shopping Cart" + "</h1>" + "<br>" +
    "Price of item 1 " + " " + item1Name + " " + "is:" + " "+ item1price +"<br>" +
    "Quantity of item 1 " + " " + item1Name + " " + "is:" + " "+ item1Quantity+ "<br>" +
    "Price of item 2 " + " " + item2Name + " " + "is:" +" "+ item2price +"<br>" +
    "Quantity of item 2 " + " " + item2Name + " " + "is:" + " "+item2Quantity + "<br>" +
    "Shipping Charges " + " " + " " + "is:" +" "+ shippingCharges + "<br>" +"<br>"+
    "Total cost of your order " + " " + "is:" + " "+totalCostBeforeDiscount+ "<br>" 
    )
}



// } else {
//     total;
// }
// document.write("<h1>" + "A Shopping Cart" + "</h1>" + "<br>" +
// "Price of item 1 :" + " " + item_name1 + " " + "is" + price1 +"<br>" +
// "Quantity of item 1 :" + " " + item_name1 + " " + "is" + quantityitem_1 + "<br>" +
// "Price of item 2 :" + " " + item_name2 + " " + "is" + price2 +"<br>" +
// "Quantity of item 2 :" + " " + item_name2 + " " + "is" + quantityitem_2 + "<br>" +
// "Shipping Charges :" + " " + " " + "is" + delivery_charges + "<br>" +"<br>"+
// "Total cost of your order :" + " " + "is" + total+ "<br>" 
// )

// 11. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct 
// answer”. 
// b. If the guessed number +1 is the secret number, show 
// “Close enough to the correct answer”



// var num1 = +prompt("Enter your number");
// if (num1 === 1) {
//     alert("Bingo! Correct answer")
// } 
// else if(num1 > 1){
//     alert("Close enough to the correct answer")
// }
// else if(num1 < 1){
//     alert("Close enough to the correct answer")
// } 
// else{

// }
//12. Write a program to check whether the given number is 
// divisible by 3. Show the message to the user if the number is 
// divisible by 3
 
// var num1 = +prompt("Enter your number");
// if (num1 %3 === 0 ) {
//     alert("Number is divisible by 3")
// } 
// else{
//     alert("not divisible by 3")
// }












