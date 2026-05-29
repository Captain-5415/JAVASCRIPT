// JAVASCRIPT TASK-8

// Fake Store API Tasks
// API Link

let api = "https://fakestoreapi.com/products";

// Beginner Level

// Task 1: Print All Products
// Fetch all products and print them.

let apiData = fetch(api)
    .then((data) => {
        return data.json();
    })
apiData.then(data => console.log(data)
)
apiData.then(d => {
    d.map(product => {
        console.log("Title :", product.title, "\nPrice :", product.price);
    })
})


// Task 2: Print Only Product Titles
let a = apiData.then(d => {
    let i = 1;
    d.forEach(product => {
        console.log(`Procust ${i}:`, product.title);
        i++;
    })
})


// Task 3: Print Total Products
let b = apiData.then(products => {
    console.log("Total Products :", products.length);
})


// Task 4: Print All Categories
let c = apiData.then(p => {
    let categories = [...new Set(p.map(data => data.category))].sort()
    for (let category of categories) {
        console.log(category);
    }
})


// Task 5: Print Products Above $50
// Use:
// filter()
let d = apiData.then(product => {
    console.log("----------Products Above $50----------");
    let high = product.filter((c, i, t) => {
        return c.price > 50;
    })
    high.forEach(p => {
        console.log(p.title, "-", p.price);
    })
})


// Intermediate Level

// Task 6: Print Products Below $50
let e = apiData.then(product => {
    console.log("----------Products Below $50----------");
    let low = product.filter((c, i, t) => {
        return c.price < 50;
    })
    low.forEach(p => {
        console.log(p.title, "-", p.price);
    })
})

// Task 7: Find First Product Above $100
// Use:
// find()
let f = apiData.then(product => {
    console.log("----------First Product Above $100----------");
    let expensive = product.find((c, i, t) => {
        return c.price > 100;
    })
    console.log(expensive.title, "-", expensive.price);
})


// Task 8: Search Product
// Find matching products.
// Use:
// includes()
// filter()
let g = apiData.then(product => {
    let searchText = "shirt";
    console.log("----------Search Product Shirt----------");
    let result = product.filter((c, i, t) => {
        return c.title.toLowerCase().includes(searchText.toLowerCase());
    })
    result.forEach(p => {
        console.log(p.title);
    })
})


// Task 9: Count Electronics Products
let h = apiData.then(product => {
    let ele = "electronics";
    let items = product.filter((c, i, t) => c.category.includes(ele))
    console.log("Electronics Count :", items.length);
})


// Task 10: Print Highest Price Product
// Use:
// sort()
// or
// reduce()
let i = apiData.then(p => {
    console.log("----------Highest Price Product----------");
    let items = [...p].sort((a, b) => b.price - a.price)
    console.log("Procuct :", items[0].title, "\nPrice :", items[0].price);
})


// Task 11: Print Lowest Price Product
// Use:
// sort()
// or
// reduce()
let j = apiData.then(p => {
    console.log("----------Lowest Price Product----------");
    let lowest = p.reduce((acc, c, i, t) => {
        if (c.price < acc.price) {
            return c;
        }
        else {
            return acc;
        }
    })
    console.log("Title :", lowest.title, "\nPrice :", lowest.price);
})


// Task 12: Calculate Total Price of All Products
// Use:
// reduce()
let k = apiData.then(p => {
    let total = p.reduce((acc, c, i, t) => {
        return acc + c.price;
    }, 0)
    console.log("Total Price :", total);
})


// Task 13: Calculate Average Product Price
let l = apiData.then(p => {
    let total = p.reduce((acc, c, i, t) => {
        return acc + c.price;
    }, 0)
    let length = p.length;
    let avg = total / length;
    console.log("Average Price :", avg);
})


// Task 14: Print Product With Highest Rating
let m = apiData.then(p => {
    console.log("----------Highest Rating Product----------");
    let items = [...p].sort((a, b) => b.rating.rate - a.rating.rate)
    console.log("Procuct :", items[0].title, "\nRating :", items[0].rating.rate);
})


// Task 15: Print Product With Lowest Rating
let n = apiData.then(p => {
    console.log("----------Lowest Rating Product----------");
    let items = [...p].sort((a, b) => a.rating.rate - b.rating.rate)
    console.log("Procuct :", items[0].title, "\nRating :", items[0].rating.rate);
})



// Advanced Level

// Task 16: Category Wise Product Count
let o = apiData.then(products => {
    products.sort((a, b) => a.category.localeCompare(b.category));
    let count = products.reduce((acc, c, i, t) => {
        acc[c.category] = (acc[c.category] || 0) + 1;
        return acc;
    }, {});
    for (let category in count) {
        console.log(`${category} : ${count[category]}`);
    }
});


// Task 17: Create Discounted Products
// Apply 10% discount.
let p = apiData.then(products => {
    console.log("----------Discounted Products----------");

    let discount = 10;
    let discountItems = products.map(p => {
        return {
            title: p.title,
            oldPrice: p.price,
            newPrice: p.price - (p.price * (discount / 100))
        }
    });
    console.log(discountItems);
    for (let a of discountItems) {
        console.log("Title :", a.title, "\nOld Price :", a.oldPrice, "\nNew Price :", a.newPrice);
    }
})


// Task 18: Sort Products Low To High
let q = apiData.then(products => {
    console.log("----------Sort Products Low To High----------");
    let lowToHigh = products.sort((a, b) => a.price - b.price);
    // console.log(lowToHigh);
    lowToHigh.forEach(p => console.log(`Title :${p.title}, Price :${p.price}`)
    )
})


// Task 19: Sort Products High To Low
let r = apiData.then(products => {
    console.log("----------Sort Products High To Low----------");
    let highToLow = products.sort((a, b) => b.price - a.price);
    // console.log(highToLow);
    highToLow.forEach(p => console.log(`Title :${p.title}, Price :${p.price}`)
    )
})


// Task 20: Check Any Product Above $500
let s = apiData.then(products => {
    let xyz = products.some(p => p.price > 500);
    console.log("Any Product Above $500 :", xyz);
})


// Task 21: Check All Products Above Rating 3
let t = apiData.then(products => {
    let abc = products.every(p => p.rating.rate > 3);
    console.log("All Products Above Rating 3 :", abc);
})

// Task 22: Print Top 5 Costliest Products
let u = apiData.then(p => {
    console.log("----------Top 5 Costliest Products----------");
    let high5 = p.sort((a, b) => b.price - a.price);
    for (let i = 0; i < 5; i++) {
        console.log(`Title :${p[i].title}\nPrice :${p[i].price}`)
    }
})

// Task 23: Print Top 5 Rated Products
let v = apiData.then(p => {
    console.log("----------Top 5 Rated Products----------");
    let high5 = p.sort((a, b) => b.rating.rate - a.rating.rate);
    for (let i = 0; i < 5; i++) {
        console.log(`Title :${p[i].title}\nRating :${p[i].rating.rate}`)
    }
})


// Task 24: Group Products By Category
let w = apiData.then(products => {
    let group = {};
    for (let p of products) {
        if (group[p.category]) {
            group[p.category].push(p)
        }
        else {
            group[p.category] = [p]
        }
    }
    console.log(group);
})


// Task 25: Convert Product Prices To INR
let x = apiData.then(products => {
    let indiaProduct = products.map(p => {
        return {
            ...p,
            price: p.price * 85
        };
    })
    console.log(indiaProduct);
    indiaProduct.forEach(p => {
        console.log(`Title : ${p.title} \nPrice : RS. ${p.price}`);
    })
})



// Real-Time Company Tasks

// Task 26: Amazon Product Filter
let y = apiData.then(products => {
    let filtered = products.filter(c => c.price < 500
        && c.rating.rate > 4
        && c.category === "electronics")
    console.log(filtered);
    filtered.forEach(p => {
        console.log(`Title :${p.title}\nPrice : ${p.price}\nRating : ${p.rating.rate}\nCategory :${p.category}`);
    })
})


// Task 27: Best Seller Product
// Find:
// Highest Rating
let z = apiData.then(products => {
    console.log("---------- Best Seller Product-Highest Rating ----------");
    let bestProduct = products.reduce((acc, c) => {
        return c.rating.rate > acc.rating.rate ? c : acc;
    })
    // console.log(bestProduct);
    for (let key in bestProduct) {
        console.log(`${key} :`, bestProduct[key]);
    }
})


// Task 28: Product Analytics Dashboard
let dashboard = apiData.then(products => {
    console.log("---------- Product Analytics Dashboard ----------");
    let totalProduct = products.length;
    let totalCategories = new Set(products.map(p => p.category)).size
    let highPrice = products.reduce((acc, c) => {
        return c.price > acc.price ? c : acc
    })
    let lowPrice = products.reduce((acc, c) => {
        return c.price < acc.price ? c : acc
    })
    let total = products.reduce((acc, c) => {
        return (acc + c.price)
    }, 0)
    let avg = total / products.length
    let bestRate = products.reduce((acc, c) => {
        return c.rating.rate > acc.rating.rate ? c : acc
    })
    console.log("Total Products :", totalProduct);
    console.log("Total Categories :", totalCategories);
    console.log("Highest Price Product :", highPrice.title, "\nPrice :", highPrice.price);
    console.log("Lowest Price Product :", lowPrice.title, "\nPrice :", lowPrice.price);
    console.log("Average Price :", avg);
    console.log("Best Rated Product :", bestRate.title, "\nRating :", bestRate.rating.rate);
})



// Task 29: Inventory Report
let reportInventory = apiData.then(products => {
    console.log("---------- Inventory Report ----------");

    let report = products.reduce((acc, c) => {
        if (c.price >= 500) {
            acc.expensive++
        } else {
            acc.affordable++
        }
        acc[c.category]++
        return acc;
    }, {
        expensive: 0,
        affordable: 0,
        electronics: 0,
        jewelery: 0,
        "men's clothing": 0,
        "women's clothing": 0
    })
    console.log("Expensive Products :", report.expensive);
    console.log("Affordable Products :", report.affordable);
    console.log("Electronics :", report.electronics);
    console.log("Jewellery :", report.jewelery);
    console.log("Mens Clothing :", report["men's clothing"]);
    console.log("Womens Clothing :", report["women's clothing"]);

    // let exp = products.filter(p => p.price >= 500);
    // let aff = products.filter(p => p.price < 500);
    // let ele = products.filter(p => p.category === "electrnics");
    // let jewellery = products.filter (p => p.category === "jewelery");
    // let mens = products.filter(p => p.category === "men's clothing");
    // let womens = products.filter(p => p.category === "women's clothing");

    // console.log("Expensive Products :", exp.length);
    // console.log("Affordable Products :", aff.length);
    // console.log("Electronics :", ele.length);
    // console.log("Jewellery :", jewellery.length);
    // console.log("Mens Clothing :", mens.length);
    // console.log("Womens Clothing :", womens.length);
})









// Task 30: Complete Admin Dashboard (Interview Level)

let apiLink = "https://fakestoreapi.com/products";
fetch(apiLink)
    .then(api => api.json())
    .then(products => {
        console.log(products)

        let totalP = products.length;

        let totalC = new Set(products.map(p => p.category)).size;

        let totalPrice = products.reduce((acc, c) => acc + c.price, 0);

        let avg = (totalPrice / totalP);

        let highest = products.reduce((acc, c) => c.price > acc.price ? c : acc);

        let lowest = products.reduce((acc, c) => c.price < acc.price ? c : acc);

        let highestRate = products.reduce((acc, c) => c.rating.rate > acc.rating.rate ? c : acc);

        let lowestRate = products.reduce((acc, c) => c.rating.rate < acc.rating.rate ? c : acc);

        let above100 = products.filter(p => p.price > 100).length;

        let below50 = products.filter(p => p.price < 50).length;

        let catCount = products.reduce((acc, c) => {
            acc[c.category] = (acc[c.category] || 0) + 1;
            return acc;
        }, {})


        let product5 = products.find(p => p.id === 5);
        let expensiveExist = products.some(p => p.price > 500);
        let allRated = products.every(p => p.rating.rate > 0);
        let shirtProducts = products.filter(
            p => p.title.toLowerCase().includes("shirt"));
        let top3 = [...products].sort((a, b) => b.price - a.price).slice(0, 3);

        document.getElementById("dashboard").innerHTML = `
    
    <div class="stats">

        <div class="card">
            <h3>Total Products</h3>
            <p>${totalP}</p>
        </div>

        <div class="card">
            <h3>Total Categories</h3>
            <p>${totalC}</p>
        </div>

        <div class="card">
            <h3>Total Price</h3>
            <p>$${totalPrice.toFixed(2)}</p>
        </div>

        <div class="card">
            <h3>Average Price</h3>
            <p>$${avg.toFixed(3)}</p>
        </div>

    </div>

    <div class="section">
        <h2>Product Insights</h2>

        <p><b>Highest Price Product:</b> ${highest.title}</p>
        <p><b>Lowest Price Product:</b> ${lowest.title}</p>

        <p><b>Best Rated Product:</b>
        ${highestRate.title} (${highestRate.rating.rate})</p>

        <p><b>Lowest Rated Product:</b>
        ${lowestRate.title} (${lowestRate.rating.rate})</p>

        <p><b>Products Above $100:</b> ${above100}</p>

        <p><b>Products Below $50:</b> ${below50}</p>
    </div>

    <div class="section">
        <h2>Category Counts</h2>

        <ul>
            ${Object.keys(catCount)
                .sort()
                .map(category =>
                    `<li>${category} : ${catCount[category]}</li>`
                )
                .join("")
            }
        </ul>
    </div>

    <div class="section">
    <h2>Additional Analytics</h2>
    <p><b>Product ID 5 :</b> ${product5.title}</p>
    <p><b>Any Product Above $500 :</b> ${expensiveExist}</p>
    <p><b>All Products Rated :</b> ${allRated}</p>
    <p><b>Products Containing 'shirt' :</b> ${shirtProducts.length}</p>
    </div>

    <div class="section">
    <h2>Top 3 Expensive Products</h2>
    <ul>
        ${top3.map(p =>
                `<li>
                <strong>${p.title}</strong>
                <span>$${p.price}</span>
            </li>`
            ).join("")}
    </ul>
    </div>

`;


    })
    .catch(error => {
        document.getElementById("dashboard")
            .innerHTML =
            `<h2>Error: ${error}</h2>`;
    })
    .finally(() => console.log("Completed... Admin Dashboard ")
    )
