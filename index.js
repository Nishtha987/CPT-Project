let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");

// Define an array to store cart items
let shoppingCart = [];

// Function to calculate the total amount
function calculateTotal() {
    let total = 0;
    shoppingCart.forEach(item => {
        const price = parseFloat(item.price.replace("Rs. ", "").replace(",", ""));
        total += price;
    });
    return total;
}

// Function to update the cart container
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalAmount = document.getElementById("total-amount");

    cartItems.innerHTML = "";
    shoppingCart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.productName} - ${item.price}`;
        cartItems.appendChild(listItem);
    });

    totalAmount.textContent = `Total Amount: Rs. ${calculateTotal().toLocaleString()}`;
}

// Function to view the cart and display details
function viewCart() {
   // Redirect to the cart page (cart.html) to display cart items
   window.location.href = "cart.html";
   displayCartDetails(); // Call the function to display cart details
}

// Function to display cart items and their details on cart.html
function displayCartDetails() {
   const cartDetails = document.getElementById("cart-details");
   cartDetails.innerHTML = "";
   shoppingCart.forEach(item => {
       const productDiv = document.createElement("div");
       productDiv.className = "cart-product";

       const productImg = document.createElement("img");
       productImg.src = item.image; // Add the image source here
       productDiv.appendChild(productImg);

       const productInfo = document.createElement("div");
       productInfo.className = "product-info";
       const productName = document.createElement("p");
       productName.textContent = item.productName;
       const productPrice = document.createElement("p");
       productPrice.textContent = item.price;
       productInfo.appendChild(productName);
       productInfo.appendChild(productPrice);

       productDiv.appendChild(productInfo);
       cartDetails.appendChild(productDiv);
   });
}


function home() {
    mainPage.style.display = "flex";
    cardMen.style.display = "block";
    cardgirl.style.display = "block";
    blogContent.style.display = "block";
    contactus.style.display = "none";

    // ... (rest of your code)

    // Remove duplicated code related to color changes
    // ...

}

function shop() {
    cardMen.style.display = "block";
    cardgirl.style.display = "block";
    mainPage.style.display = "none";
    blogContent.style.display = "none";
    aboutPage.style.display = "none";
    contactus.style.display = "none";

    // ... (rest of your code)

    // Remove duplicated code related to color changes
    // ...
}

function blog() {
    cardMen.style.display = "none";
    cardgirl.style.display = "none";
    mainPage.style.display = "none";
    blogContent.style.display = "block";
    aboutPage.style.display = "none";
    contactus.style.display = "none";

    // ... (rest of your code)

    // Remove duplicated code related to color changes
    // ...
}

function about() {
    aboutPage.style.display = "block";
    cardMen.style.display = "none";
    cardgirl.style.display = "none";
    mainPage.style.display = "none";
    blogContent.style.display = "none";
    contactus.style.display = "none";

    // ... (rest of your code)

    // Remove duplicated code related to color changes
    // ...
}

function contact() {
    contactus.style.display = "block";
    aboutPage.style.display = "none";
    cardMen.style.display = "none";
    cardgirl.style.display = "none";
    mainPage.style.display = "none";
    blogContent.style.display = "none";

    // ... (rest of your code)

    // Remove duplicated code related to color changes
    // ...
}

function showCard(img) {
    let newImg = document.getElementById("cartImg");
    newImg.src = img.src;
    document.querySelector(".fullPage").style.display = "flex";
    contactus.style.display = "none";
    aboutPage.style.display = "none";
    cardMen.style.display = "none";
    cardgirl.style.display = "none";
    mainPage.style.display = "none";
    blogContent.style.display = "none";
}

function addToCart(productName, price, image) {
   const item = { productName, price, image };
   shoppingCart.push(item);
   updateCart(); // Update the cart on the current page
   alert(`${productName} has been added to the cart!`);
   viewCart(); // Redirect to the cart page
}


function displayCart() {
   const cartProducts = document.querySelector("#cart-products");
   const totalAmount = document.querySelector("#total-amount");
   let total = 0;

   // Clear previous cart items
   cartProducts.innerHTML = "";

   // Loop through the shoppingCart array and display items
   shoppingCart.forEach(item => {
       const productDiv = document.createElement("div");
       productDiv.className = "cart-product";

       const productImg = document.createElement("img");
       productImg.src = item.image;
       productDiv.appendChild(productImg);

       const productInfo = document.createElement("div");
       productInfo.className = "product-info";
       const productName = document.createElement("p");
       productName.textContent = item.productName;
       const productPrice = document.createElement("p");
       productPrice.textContent = item.price;
       productInfo.appendChild(productName);
       productInfo.appendChild(productPrice);

       productDiv.appendChild(productInfo);
       cartProducts.appendChild(productDiv);

       // Calculate the total amount
       const price = parseFloat(item.price.replace("Rs. ", "").replace(",", ""));
       total += price;
   });

   totalAmount.textContent = `Total Amount: Rs. ${total.toLocaleString()}`;
}



// Call the displayCart function when the cart.html page loads
if (window.location.pathname.endsWith("cart.html")) {
    displayCart();
}

 
function addToCart(){
   alert("Added To Cart");
   location.reload();
}
// Function to redirect to the cart page
function redirectToCart() {
   // Redirect to the cart page (cart.html) to display cart items
   window.location.href = "cart.html";
}

// Attach this function to the "View Cart" button or link
{const viewCartButton = document.getElementById("viewCartButton");
viewCartButton.addEventListener("click", redirectToCart);
}