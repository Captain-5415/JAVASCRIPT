//JAVASCRIPT Task-3


// 1. Student Login Check
// Ask username and password using prompt().
// If username = "admin" and password = "1234"
// → print "Login Success"
// Else print "Invalid User"

// let username = prompt("Enter Username");
// let password = prompt("Enter Password");
// if (username === "admin" && password === "1234") {
//     console.log("Login Success");
// } else {
//     console.log("Invalid User");
// }

//------------------------------------------------------------------------------

// 2. ATM Balance System
// Create a variable balance = 5000
// Withdraw amount using prompt()
// If amount less than balance → "Withdraw Success"
// Else → "Insufficient Balance"

// let balance = 5000;
// let withdraw_amount = prompt("Enter Withdrawal Amount");
// if(withdraw_amount <= balance) {
//     console.log("Withdrawa Success");
// } else {
//     console.log("Insufficient Balance");
// }

//------------------------------------------------------------------------------

// 3. Traffic Signal Project
// Using switch
// "red" → stop
// "yellow" → ready
// "green" → go

// let traffic_light = prompt("Enter Traffic Light Color (Red, Yellow, Green)");
// switch (traffic_light.toLowerCase()) {
//     case "red" : console.log("Stop"); break;
//     case "yellow" : console.log("ready"); break;
//     case "green" : console.log("go"); break;
//     default : console.log("Invalid Color");
// }

//------------------------------------------------------------------------------

// 4. Age Eligibility Checker
// Take age from user.
// age >= 18 → "Eligible for Vote"
// Else → "Not Eligible"

// let age = prompt("Enter Your Age");
// if(age >= 18){
//     console.log("Eligible for vote");
// }
// else{
//     console.log("Not Eligible");
// }

//------------------------------------------------------------------------------

// 5. Shopping Discount System
// Take product price.
// Above 5000 → 20% discount
// Above 3000 → 10% discount
// Else → no discount

// let price = prompt("Enter Product Price");
// if(price > 5000) {
//     console.log("20% discount");
// }
// else if(price > 3000) {
//     console.log("10% discount");
// }
// else{
//     console.log("No discount");
// }

//------------------------------------------------------------------------------

// 6. Password Strength Checker
// Check password length.
// length >= 8 → "Strong Password"
// Else → "Weak Password"

// let password = prompt("Enter Password");
// if(password.length >= 8){
//     console.log("Strong password");
// }else{
//     console.log("Weak Password");
// }

//------------------------------------------------------------------------------

// 7. Mobile Battery Warning
// Take battery percentage.
// <= 10 → "Battery Low"
// <= 50 → "Battery Medium"
// Else → "Battery Full"

// let battery = prompt("Enter Battery Percentage");
// if(battery <=10){
//     console.log("Battery Low");
// }else if(battery >10 && battery <= 50){
//     console.log("Battery Medium");
// }else{
//     console.log("Battery Full");
// }

//------------------------------------------------------------------------------

// 8. Employee Salary Bonus
// Create salary variable.
// salary >= 50000 → 15% bonus
// salary >= 30000 → 10% bonus
// Else → 5% bonus

// let salary = prompt("Enter salary");
// if(salary >= 50000){
//     console.log("15% Bonus");
// }else if(salary >= 30000){
//     console.log("10% Bonus");
// }else{
//     console.log("5% Bonus");
// }

//------------------------------------------------------------------------------

// 9. Online Food Order
// Take order amount.
// Above 499 → "Free Delivery"
// Else → "Delivery Charge Added"

// let amount = prompt("Enter Amount");
// if(amount > 499){
//     console.log("Free Delivery");
// }else{
//     console.log("Delivery Charge Added");
// }

//------------------------------------------------------------------------------

// 10. Movie Ticket Booking
// Take age.
// Below 5 → Free ticket
// Below 18 → Child ticket
// Else → Adult ticket

// let age = prompt("Enter Your Age");
// if(age < 5){
//     console.log("Free Ticket");
// }else if(age >= 5 && age < 18){
//     console.log("Child Ticket");
// }else{
//     console.log("Adult Ticket");
// }

//------------------------------------------------------------------------------

// 11. Instagram Likes Counter
// Using for loop
// Print:
// Like 1
// Like 2
// Like 3
// Like 4
// Like 5

// for(let a = 1; a <= 5; a++){
//     console.log(`Like ${a}`);
// }

//------------------------------------------------------------------------------

// 12. Countdown Timer
// Using while loop
// Print:
// 5
// 4
// 3
// 2
// 1
// Start

// let timer = 5;
// while(timer >= 0){
//     if(timer == 0){
//         console.log("Start");
//     }else{
//         console.log(timer);
//     }
//     timer--;
// }

//------------------------------------------------------------------------------

// 13. OTP Verification
// Create OTP = 1234
// Take input from user.
// Correct → "OTP Verified"
// Wrong → "Invalid OTP"

// let otp = prompt("Enter OTP");
// if(otp == 1234){
//     console.log("OTP Verified");
// }else{
//     console.log("Invalid OTP");
// }

//------------------------------------------------------------------------------

// 14. E-commerce Cart Total
// Array:
// let cart = [200,500,1000,300]
// Find total cart value using loop.

// let cart = [200, 500, 1000, 300];
// let total = 0;
// for(let a = 0; a< cart.length; a++){
//     total = total + cart[a];
// }console.log("Total cart value: " + total);

//------------------------------------------------------------------------------

// 15. Student Mark Grade System
// Take mark.
// 90+ → A Grade
// 70+ → B Grade
// 50+ → C Grade
// Else → Fail

// let marks = prompt("Enter Your Marks");
// if(marks > 90){
//     console.log("A Grade");
// }else if(marks > 70){
//     console.log("B Grade");
// }else if(marks > 50){
//     console.log("C Grade");
// }else{
//     console.log("Fail");
// }

//------------------------------------------------------------------------------

// 16. Netflix Subscription Checker
// Boolean variable:
// let subscription = true
// true → "Watch Movie"
// false → "Buy Subscription"

// let subscription = true;
// if(subscription){
//     console.log("Watch Movie");
// }else{
//     console.log("Buy Subscription");
// }

//------------------------------------------------------------------------------

// 17. Product Stock Checker
// let stock = 0
// stock > 0 → "Product Available"
// Else → "Out of Stock"

// let stock = 10;
// if(stock > 0){
//     console.log("Product Available");
// }else{
//     console.log("Out of Stock");
// }

//------------------------------------------------------------------------------

// 18. Weather App Condition
// Using switch
// "sunny" → "Go Outside"
// "rainy" → "Take Umbrella"
// "cold" → "Wear Jacket"

// let weather = prompt("Enter Weather Condition (Sunny, Rainy, Cold)");
// switch(weather){
//     case "sunny" : console.log("Go Outside"); break;
//     case "rainy" : console.log("Take Umbrella"); break;
//     case "cold" : console.log("Wear Jacket"); break;
//     default : console.log("Invalid Weather Condition");
// }

//------------------------------------------------------------------------------

// 19. User Profile Object
// Create object:
// let user = {
//    name : "Navi",
//    age : 20,
//    city : "Bangalore"
// }
// Print all values using for in loop.

// let user ={
//     name : "Gowtham",
//     age : 23,
//     city : "Vijayawada"
// }
// for(let a in user){
//     console.log(user[a]);
// }

//------------------------------------------------------------------------------

// 20. WhatsApp Chat Array
// Array:
// let chats = ["hi","hello","where are you","ok"]
// Print each message using for of loop.

// let chats = ["Hii","Helloo","where are you...?","Okay","Bye"];
// for(let msg of chats){
//     console.log(msg);
// }

