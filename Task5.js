//JAVASCRIPT Task-5

// JavaScript Array & Spread Operator Tasks
// Beginner Level Tasks
//------------------------------------------------------------------------------

// Task 1 — Spread Operator

let frontEnd = ["HTML", "CSS"];
let backEnd = ["Node", "MongoDB"];

letmergedArrays = [...frontEnd, ...backEnd];
console.log(letmergedArrays);

// Task 2 — Copy Array

let original = [1, 2, 3];
let second = [...original, 4];
console.log("Copy Array : " + second);
console.log("Original Array : " + original);

// Task 3 — Object Merge

let student = {
    name: "Gowtham",
    age: 23,
};
let job = {
    role: "Software Engineer",
    company: "Stackly",
};
let merge_object = { ...student, ...job };
console.log(merge_object);

// Task 4 — Rest Operator

function addition(a, b, ...remaining) {
    console.log("a : " + a);
    console.log("b : " + b);
    console.log("remaining : " + remaining);
    console.log("Total count of remaining values : " + remaining.length);
}
addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Destructuring Tasks

// Task 5 — Array Destructuring
let colors = ["red", "green", "blue", "yellow"];
let [a1, a2, a3, a4] = colors;
console.log(a3);

// Task 6 — Nested Array Destructuring
let data = [1, [2, [3, [4]]]];
let [b1, [b2, [b3, [b4]]]] = data;
console.log(b1, b2, b3, b4);

// Task 7 — Object Destructuring
let mobile = {
    brand: "Black-Berry",
    price: 70000,
    color: "black",
};
let { brand, price, color } = mobile;
console.log(brand, color);

// Array Manipulation Tasks

// Task 8 — push() & pop()
let numbers = [1, 2, 3];
numbers.push(4, 5, 6);
console.log(numbers);
numbers.pop();
console.log(numbers);

// Task 9 — shift() & unshift()
let fruits = ["banana", "orange"];
fruits.unshift("apple");
console.log(fruits);
fruits.shift();
console.log(fruits);

// Task 10 — splice()
let arr = [1, 2, 30, 40, 5, 6];
arr.splice(2, 2, 3, 4);
console.log(arr);

// Task 11 — concat()
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b));
console.log(a.concat(b, 5, 6));

// Task 12 — slice()
let marks = [10, 20, 30, 40, 50, 60];
let extract = marks.slice(2, 5);
console.log(extract);

// Task 13 — flat()
let nest = [1, [2, [3, [4, [5]]]]];
let single_arr = nest.flat(Infinity);
console.log(single_arr);

// Task 14 — fill()
let arr1 = [1, 2, 3, 4, 5];
arr1.fill("done", 3, 5);
console.log(arr1);

// Task 15 — includes()
let values = [10, 20, 30, 40];
console.log("20 exists :" + values.includes(20));
console.log("100 exists :" + values.includes(100));

// Task 16 — indexOf()
let arr2 = [1, 2, 3, 4, 3, 2];
console.log("first index of 3 : " + arr2.indexOf(3));
console.log("first index of 2 : " + arr2.indexOf(2));

// Task 17 — lastIndexOf()
console.log("last index of 3 : " + arr2.lastIndexOf(3));
console.log("last index of 2 : " + arr2.lastIndexOf(2));

// Task 18 — sort()
let nums = [100, 2, 55, 1, 9];
nums.sort(); //Doesnt sort in numerical order, it sorts in string order(not used for 2 or more digit numbers)
console.log(nums);
nums.sort((a, b) => a - b);
console.log(nums);

// Task 19 — reverse()
let letters = ["a", "b", "c", "d"];
console.log(letters);
letters.reverse();
console.log(letters);

// Real-Time Logical Tasks

// Task 20 — Student Management
let students = ["Rahul", "Ajay", "Gowtham"];
function addStudent(name) {
    students.push(name);
    console.log(students);
}
function removeStudent(name) {
    let index = students.indexOf(name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(students);
    } else {
        console.log("Student not found");
    }
}
function replace(oldName, newName) {
    let index = students.indexOf(oldName);
    if (index !== -1) {
        students[index] = newName;
        console.log(students);
    } else {
        console.log("Student not found");
    }
}
addStudent("Vijay");
removeStudent("Ajay");
replace("Rahul", "Rohit");
console.log(students.reverse());


// Task 21 — Shopping Cart
let cart = ["Shoes", "Watch", "Phone"];
function add(item) {
    cart.push(item);
    console.log(cart);
}
function remove(item) {
    let index = cart.indexOf(item);
    if (index !== -1) {
        cart.splice(index, 1);
        console.log(cart);
    } else {
        console.log("Item not found");
    }
}
function check(item) {
    console.log(`${item} exists : ` + cart.includes(item));
}
add("Laptop");
remove("Watch");
check("Phone");
console.log("Total Cart Items:", cart.length);


// Task 22 — Employee Database
let employee = {
    name: "Gowtham",
    role: "Web Developer",
    salary: "5LPA",
};
let { name, role, salary } = employee;
console.log(name);
console.log(role);
console.log(salary);
let copy_employee = { ...employee };
copy_employee.salary = "10LPA";
console.log("Original Employee : ", employee);
console.log("Copied Employee : ", copy_employee);


// Advanced Logical Tasks

// Task 23 — Custom Function
function company(name, ...skills) {
    console.log("employee name : ", name);
    console.log("employee skills : ", skills);
    console.log("Total skill count : ", skills.length);
}
company("Gowtham", "HTML", "CSS", "JS", "React")


// Task 24 — Array Analyzer
let data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Original :", data1);
let data2 = [...data1]
let five = data2.slice(0, 5)
console.log("First 5 Values: ", five);
let reversed = data2.reverse()
console.log("Reverse Array: ", reversed);
console.log("7 Exists:", data1.includes(7));
console.log("Index of 10(original):", data1.indexOf(10));


// Task 25 — Complete Challenge
let users = [
    { name: "Rahul", role: "Developer" },
    { name: "Ajay", role: "Designer" },
    { name: "Kumar", role: "Tester" }
]
users.unshift({ name: "Gowtham", role: "Manager" });
users.pop()
let users2 = [
    { name: "captain", role: "Developer" },
    { name: "jack", role: "Designer" },
    { name: "sparrow", role: "Tester" }
]
console.log(users);
console.log(users2);
let merged_users = [...users, ...users2];
console.log(merged_users);
for(let i=0; i<merged_users.length; i++){
    console.log(merged_users[i].name);
}
let reversed_users = merged_users.reverse();
console.log(reversed_users);

