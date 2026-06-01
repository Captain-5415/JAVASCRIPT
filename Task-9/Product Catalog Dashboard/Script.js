
let apiKey = "https://fakestoreapi.com/products/";

fetch(apiKey)
    .then((api) => {
        return api.json();
    })
    .then((jsData) => {
        console.log(jsData);

        let header = document.querySelector(".header");
        let name = document.createElement("h1");
        name.textContent = "Product Catalog Dashboard";
        header.append(name);
        header.setAttribute("class", "header");

        let totalProducts = document.createElement("h3");
        totalProducts.textContent = `Total Products: ${jsData.length}`;
        totalProducts.style.fontSize = "18px";
        totalProducts.style.width = "100%";
        totalProducts.style.textAlign = "center";
        totalProducts.style.fontSize = "28px";

        let products = document.querySelector(".products")
        products.append(totalProducts)


        jsData.forEach((c, i, t) => {

            let subProduct = document.createElement("div")
            subProduct.textContent = "";

            let title = document.createElement("h1");
            let image = document.createElement("img");
            let price = document.createElement("h2");
            let category = document.createElement("h3");
            let description = document.createElement("p");
            let tag = document.createElement("span");
            let details = document.createElement("p");

            title.textContent = c.title.slice(0, 30) + "...";
            image.src = c.image;

            // price.textContent = `$${c.price.toFixed(2)}`;
            let btn = document.createElement("button");
            btn.textContent = "Show Price";
            btn.addEventListener("click", () => {
                alert(`The price of ${c.title} is $${c.price.toFixed(2)}`);
            });
            btn.setAttribute("class", "btn");
            price.append(btn);

            // category.textContent = c.category;
            let btn1 = document.createElement("button");
            btn1.textContent = "Show Category";
            btn1.addEventListener("click", () => {
                alert(`The category of ${c.title} is "${c.category}"`);
            });
            btn1.setAttribute("class", "btn");
            category.append(btn1);

            let btn2 = document.createElement("button");
            btn2.textContent = "View Details";
            btn2.addEventListener("click", () => {
                alert(`Title: ${c.title} \nPrice: $${c.price.toFixed(2)} \nCategory: ${c.category}`);
            });
            // btn2.style.backgroundColor = "#007BFF";
            btn2.style.background = "linear-gradient(135deg, #004085, #007BFF, #66b2ff, #007BFF, #004085)";
            btn2.setAttribute("class", "btn");
            details.append(btn2);

            description.textContent = c.description.slice(0, 50) + "...";
            if (c.price > 100) {
                tag.textContent = "Expensive Product";
                // tag.style.backgroundColor = "#D4AF37";
                tag.style.background = "linear-gradient(135deg, #7f6000, #d4af37, #fff2a8, #d4af37, #7f6000)";
                tag.style.color = "#111";
                tag.style.borderRadius = "10px 10px 0 0";
            } else {
                tag.textContent = "Budget Product";
                // tag.style.backgroundColor = "#2E8B57";
                tag.style.background = "linear-gradient(135deg, #0b3d0b, #1f8a3d, #a8ffb0, #1f8a3d, #0b3d0b)";
                tag.style.color = "#111";
                tag.style.borderRadius = "10px 10px 0 0";
            }
            tag.classList.add("tag");

            subProduct.append(tag, title, image, price, category, description, details);
            subProduct.setAttribute("class", "subProduct")


            // console.log(products);
            products.append(subProduct)

        });

    })
    .catch((error) => {
        let products = document.querySelector(".products")

        products.textContent = error.message
        products.style.backgroundColor = "red"
        products.style.color = "white"
        products.style.textAlign = "center"
    })
    .finally(() => {
        let final = document.querySelector(".final");
        // final.textContent = "Api called Succesfully...";
        let footer = document.createElement("p");
        footer.innerHTML = "&copy; 2026 Product Catalog Dashboard. All Rights Reserved.";
        final.append(footer);
        final.style.backgroundColor = "black";
        final.style.color = "white";
        final.style.textAlign = "center";
    });