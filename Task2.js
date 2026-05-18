//JAVASCRIPT BASICS - TASK 2


// 1. Create a variable and store your favorite food.
let favoriteFood = "Pizza";

// 2. Create a variable and store your mobile number.
let mobileNumber = 9052520552;

// 3. Create a boolean variable with false value.
let student = false;

// 4. Create one undefined variable and print typeof.
let variable;
console.log(typeof variable); //undefined

// 5. Create one array with 6 animal names.
let animals = ["Lion", "Zebra", "Giraffe", "Bear", "Elephant"];

// 6. Print second animal from array.
console.log(animals[1]) //zebra

// 7. Print last animal from array using length.
console.log(animals[animals.length - 1]);   //elephant

// 8. Create object with bike details (name, model, color).
let bikeObj ={
    name : "harley-davidson",
    model : 2026,
    color : "Blue"
}

// 9. Print bike color from object.
console.log(bikeObj.color)  //blue

// 10. Create two variables and subtract values.
let a1 = 20;
let a2 = 5;
console.log(a1 - a2);   //15

// 11. Create two variables and divide values.
console.log(a1 / a2);   //4

// 12. Find 15 % 2.
console.log(15 % 2);    //1

// 13. Find 2 ** 5.
console.log(2 ** 5);    //32

// 14. Create variable with 5 and use post increment.
let a3 = 5;
console.log(a3++);  //5
console.log(a3);    //6

// 15. Create variable with 10 and use pre increment.
let a4 = 10;
console.log(++a4);  //11
console.log(a4);    //11

// 16. Create variable with 20 and use post decrement.
let a5 = 20;
console.log(a5--);  //20
console.log(a5);    //19

// 17. Create variable with 50 and use pre decrement.
let a6 = 50;
console.log(--a6);  //49
console.log(a6);    //49

// 18. Check 100 > 50.
console.log(100 > 50);  //true //greaterThan

// 19. Check 25 < 10.
console.log(25 < 10);   //false lessThan

// 20. Check 50 >= 50.
console.log(50 >=50);   //true  //greaterThanEqualTo

// 21. Check 30 <= 25.
console.log(30 <= 25);  //false //lessThanEqualTo

// 22. Check 10 == "10".
console.log(10 == "10"); //true //lossyTypeEquality

// 23. Check 10 === "10".
console.log(10 === "10");    //false //strictEquality

// 24. Check 25 != "25".
console.log(25 != "25");     //false //lossyTypeInequality

// 25. Check 25 !== "25".
console.log(25 !== "25");    //true //strictInequality

// 26. Use AND operator:
//     10 > 5 && 20 > 15
console.log(10 > 5 && 20 > 15);   //true

// 27. Use AND operator:
//     5 > 10 && 20 > 15
console.log(5 > 10 && 20 > 15);    //false

// 28. Use OR operator:
//     5 > 10 || 20 > 15
console.log(5 > 10 || 20 > 15);    //true

// 29. Use OR operator:
//     2 > 5 || 1 > 10
console.log(2 > 5 || 1 > 10);     //false

// 30. Use NOT operator:
//     !(10 > 5)
console.log(!(10 > 5));    //false

// 31. Use NOT operator:
//     !(5 > 10)
console.log(!(5 > 10));    //true

// 32. Create ternary operator:
//     if 50 > 25 print "True"
//     else print "False"
let result =(50 > 25) ? "True" : "False";
console.log(result);    //True

// 33. Create ternary operator:
//     if 18 >= 21 print "Adult"
//     else print "Minor"
let age = (18 >= 21) ? "Adult" : "Minor";
console.log(age);   //Minor

// 34. Create one array with 5 city names and print third city.
let cities = ["Vizag", "Hyderabad", "Vijayawada", "Chennai", "Banglore"];
console.log(cities[2])   //Vijayawada

// 35. Create one object with employee details and print employee name.
let empObj = {
    name : "Gowtham",
    age : 23,
    role : "Full Stack Developer",
    city : "Vijayawada"
}
console.log(empObj.name);   //Gowtham

// 36. Create variable with string "100" and print typeof.
let x1 = "100";
console.log(typeof x1);   //string

// 37. Create variable with number 100 and print typeof.
let x2 =100;
console.log(typeof x2);  //number

// 38. Create one null variable and print it.
let x3 = null;
console.log(x3);    //null

// 39. Create one array with mixed datatypes.
let arr = ["Gowtham", 23, true, null, {name: "John"}, [1, 2, 3]];
console.log(arr);

// 40. Create object with student details:
//     name, mark, passed(boolean)
let studentObj = {
    name : "Gowtham",
    marks : 90,
    passed : true
}
console.log(studentObj.marks);
