//JAVASCRIPT Task-4

//------------------------------------------------------------------------------

// 1 — Smart Attendance Checker
// Concept:
// if else
// logical operator
// function
// Scenario:
// A student can enter exam hall only if:
// attendance >= 75
// fees paid = true
// Expected:
// Allowed for Exam
// Otherwise:
// Not Allowed

function checker(attendence, fees_paid){
    if(attendence >= 75 && fees_paid == true){
        console.log("Allowed for Exam");
    }else{
        console.log("Not Allowed");
    }
}
checker(80, true);

// 2 — Mobile Password Strength Checker
// Concept:
// string
// conditions
// Requirement:
// Check password:
// minimum 8 characters
// should contain number
// should contain uppercase
// Example:
// Abc12345
// Output:
// Strong Password

var pswd = "Abc12345";
if(pswd.length >=8){
    if(pswd.match(/[0-9]/) && pswd.match(/[A-Z]/)){
        console.log("Strong Password");
    }else{
        console.log("Password must contain a number and an uppercase letter");
    }
}else{
    console.log("Password must contain 8 characters");
}


// 3 — Find Second Largest Number
// Concept:
// loop
// conditions
// variables
// Input:
// [10,50,80,20,90,70]
// Output:
// 80

var arr = [2,55,96,100,56,46,20];
var first = arr[0];
var second = -Infinity;
for(var i=1; i<arr.length; i++){
    if(arr[i] > first){
        second = first;
        first = arr[i];
    }else if(arr[i] > second && arr[i] != first){
        second = arr[i];
    }
}console.log("Second Largest Number is: " + second);


// 4 — Bus Seat Booking System
// Concept:
// array
// loop
// conditions
// Requirement:
// Create 10 seats.
// If seat booked:
// Seat Already Booked
// Else:
// Seat Booked Successfully

// var seats = [1,1,1,1,1,0,0,0,0,0];  // 1=available, 0=booked
// var wanted_seat = prompt("Enter Seat Number (1-10): ");
// var i =0;
// while(i < seats.length){
//     if(i == wanted_seat-1){
//         if(seats[i]==1){
//             console.log("Seat Booked Successfully");
//             seats[i] = 0;
//         }else{
//             console.log("Seat Already Booked");
//         }
//     }break;
//     i++
// }


// 5 — ATM Cash Withdraw Logic
// Concept:
// function
// return
// conditions
// Rules:
// balance = 10000
// user cannot withdraw more than balance
// minimum balance should maintain 1000
// Example:
// Withdraw:
// 9500
// Output:
// Insufficient Balance

var balance = 10000;
function withdraw(amount){
    if( amount > balance){
        return "Insufficient Balance";
    }else if( balance - amount < 1000){
        return "Must maintain minimum balance";
    }else{
        balance -= amount;
        return "Withdrawal Successful";
    }
}
let result = withdraw(8000);
console.log(result);


// 6 — Product Search Engine
// Concept:
// array
// for of
// string methods
// Requirement:
// Search product from array.
// Example:
// ["iphone","samsung","realme","oppo"]
// Search:
// realme
// Output:
// Product Found
var products = ["Laptop","Mobile","Tablet","Watch"];
function Searching(search){
    for(var item of products){
        if(item.toLowerCase() == search.toLowerCase()){
            console.log("Product Found");
            return;
        }
    }
    console.log("Product Not Found");
}
Searching("mobile");
Searching("camera");


// 7 — Voting Eligibility System
// Concept:
// nested if
// logical operators
// Rules:
// Person can vote only if:
// age >= 18
// has voter id
// citizenship = Indian
var person = {
    age: 20,
    voter_id: true,
    citizenship: "Indian"
}
if(person.age >= 18){
    if(person.voter_id == true && person.citizenship.toLowerCase() == "indian"){
        console.log("Eligible to Vote");
    }else{
        console.log("Not Eligible to Vote");
    }
}else{
    console.log("Not Eligible to Vote... Undrage");
}


// 8 — Online Food Order Bill
// Concept:
// function
// parameters
// arithmetic operators
// Requirement:
// Calculate:
// food price
// GST
// delivery charge
// discount
// Final Output:
// Total Bill : ₹450
function orderBill(price, gstPercent, delivery, discountPercent){
    var gst = (price * gstPercent) / 100;
    var discount = (price * discountPercent) / 100;
    var total = price + gst + delivery - discount;
    return total;
}
console.log("Total Bill : ₹" + orderBill(500, 10, 50, 30));


// 9 — Reverse Word Without reverse()
// Concept:
// loop
// string
// Input:
// javascript
// Output:
// tpircsavaj
var word = "gowtham";
var reversed = "";
for(var i=word.length-1; i>=0; i--){
    reversed += word[i];
}
console.log(reversed);


// Task 10 — Mini Instagram Like System
// Concept:
// variable
// function
// ternary operator
// Requirement:
// When user clicks like:
// Liked ❤️
// Else:
// Like 🤍
// Also maintain total likes count.
var totalLikes = 0;
function postLike(liked){
    liked ? totalLikes++ : totalLikes--;
    console.log(liked ? "Liked ❤️":"Like 🤍");
    console.log("Total Likes: " + totalLikes);
}
postLike(true);
postLike(true);
postLike(true);
postLike(false);
postLike(true);
postLike(true);