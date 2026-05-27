//JAVASCRIPT Task-7


// 1. E-Commerce Product Filter
// Using the same API:
// https://fakestoreapi.com/products/
// Expected Concept:
// fetch()
// filter()
// forEach()

// let apiKey = "https://fakestoreapi.com/products/";
// fetch(apiKey)
//     .then((data) => {
//         return data.json();
//     })
//     .then((products) => {
//         let newData = products.filter((c, i, t) => {
//             return c.price > 100 && c.category === "electronics";
//         })
//         newData.forEach((p) => {
//             console.log("Title:", p.title);
//             console.log("Price:", p.price);
//         })
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     })
//     .finally(() => {
//         console.log("Data fetching completed.");
//     })



// 2. Online Shopping Cart Total
// Use:
// reduce()
let cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
]
let total = cart.reduce((acc, c, i, t) => {
    return acc + (c.price * c.qty);
}, 0)
console.log("Total Price:", total);



// 3. Employee Salary Dashboard
// Use:
// filter()
// map()
let employees = [
    { name: "John", salary: 25000 },
    { name: "Sam", salary: 50000 },
    { name: "Ravi", salary: 45000 },
    { name: "Kumar", salary: 30000 }
]
let emp = employees.filter((c, i, t) => {
    return c.salary > 40000;
}).map((e) => {
    return e.name;
})
emp.forEach((name) => {
    console.log(name);
})



// 4. Food Delivery App
// Use:
// find()
let hotels = [
    { hotel: "A2B", rating: 4.1 },
    { hotel: "KFC", rating: 4.7 },
    { hotel: "Dominos", rating: 4.3 }
]
let highRating = hotels.find((c, i, t) => {
    return c.rating > 4.5;
})
for (let key in highRating) {
    console.log(key + ":", highRating[key]);
}



// 5. Student Pass/Fail System
// Use:
// every()
let marks = [45, 67, 89, 90, 34]
let isPass = marks.every((m) => {
    return m >= 35;
})
if (isPass) {
    console.log("passed.");
} else {
    console.log("Failed.");
}



// 6. OTP Verification System
// Use:
// includes()
let otpList = [1234, 4567, 7890, 9876, 5415]
let otp = 5415;
let isExist = otpList.includes(otp);
if (isExist) {
    console.log("OTP is Exists.");
} else {
    console.log("OTP is Not Exists.");
}



// 7. Movie Booking Timer
// Task:
// Create countdown from 10 to 0 using:
// setInterval()
// clearInterval()

// let nmu = 10;
// let timer = setInterval(() => {
// console.log(nmu);
// if(nmu === 0) {
//     clearInterval(timer);
//     console.log("Timer Stopped.");
// }
// nmu--;
// },1000);



// 8. Instagram Like Counter
// Task:
// Every second increase likes count.
// Use:
// setInterval()
// clearInterval()

// let likes = 1;
// let count = setInterval(() => {
// console.log("Likes:", likes);
// if(likes === 10) {
//     clearInterval(count);
// }
// likes++;
// },1000)



// 10. Weather App Simulation
// Task:
// Create Promise manually.
// Condition:
// If internet = true → resolve("Weather Data")
// else reject("No Internet")
// Use:
// Promise
// resolve
// reject
// then
// catch

// let internet = true;
// let weather = new Promise((resolve, reject) => {
//     if(internet) {
//         resolve("Weather Data");
//     } else {
//         reject("No Internet");
//     }
// })
// weather.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })



// Mini Project Level Tasks
// 11. Amazon Product Search
// Task:
// Search products containing word "shirt"
// Use:
// filter()
// includes()
let products = [
    { item: "Blue Shirt", price: 700 },
    { item: "Blue Jeans", price: 1000 },
    { item: "Black Shirt", price: 800 },
    { item: "Red Shirt", price: 500 }
]
let result = products.filter((c,i,t) => {
    return c.item.toLocaleLowerCase().includes("shirt")
})
console.log(result);
result.forEach((c)=>{
    console.log(c.item,c.price);
})



// 12. YouTube Video Duration
// Task:
// Calculate total watch time.
// Use:
// reduce()
let videos = [10,20,30,40]
console.log("Total watch time.",videos.reduce((acc,c,i,t)=>{
    return acc+c
},0));



// 13. Swiggy Order Status
// Task:
// Use switch statement.
// Placed
// Preparing
// Out for Delivery
// Delivered
// Print suitable message.
let status = "Delivered"
switch(status){
    case "Placed":
        console.log("Your Order is Placed");
        break;
    case "Preparing":
        console.log("Your Order is Preparing");
        break;
    case "Out for Delivery":
        console.log("Your Order is Out for Delivery");
        break;
    case "Delivered":
        console.log("Your Order is Delivered");
        break;
    default:
        console.log("Invalid order status.");
}



// 14. WhatsApp Chat Analyzer
// Task:
// Count total messages.
// Use:
// length
// loop
let chats = ["hi","hello","where","ok","bye"]
// console.log(chats.length);
let count =0;
for(let i=0; i<chats.length; i++){
    count++
}console.log("Total Messages:", count);



// 15. Netflix Age Restriction
// Task:
// Use:
// ternary operator
// age >= 18 ? "watch movie" : "access denied"
let age = 18;
let access = age >= 18 ? "watch movie" : "access denied"
console.log(access);



// Advanced Real-Time Tasks
// 16. Flipkart Product Sorting
// Task:
// Sort products by price low to high.
// Use:
// sort((a,b)=>a-b)
let prices = [1200,450,9999,2500,700]
let sorted = prices.sort((a,b)=>a-b)
console.log(sorted);



// 17. Employee Attendance
// Use:
// reduce()
let attendance = ["present", "absent", "present"];
let result1 = attendance.reduce((acc,c,i,t) => {
    acc[c] = (acc[c] || 0) + 1;
    return acc;
}, {});
console.log(result1);



// 18. Banking System
// Task:
// Create:
// deposit()
// withdraw()
// checkBalance()
// Using functions.
let balance = 1000;
function deposit(amount) {
    balance += amount;
    console.log(amount + " deposited.");
}
function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log(amount + " withdrawn.");
    } else {
        console.log("Insufficient Balance.");
    }
}
function checkBalance() {
    console.log("Current Balance:", balance);
}
checkBalance();
deposit(500);
withdraw(300);
checkBalance();



// 19. Zomato Rating Checker
// Task:
// Check any hotel rating below 3.
// Use:
// some()
let restaurants = [
    { name: "Spicy Hub", rating: 4.2 },
    { name: "Food Palace", rating: 2.8 },
    { name: "Tasty Bites", rating: 4.5 }
];
let lowRating = restaurants.some(h => h.rating < 3);
console.log("Any hotel with rating below 3 ", lowRating);





